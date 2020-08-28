import { useState } from "react";
import { useSelector } from "react-redux";
import { cloneDeep } from "lodash";

import useSecureRoute from "../../../../hooks/useSecureRoute";

import { finPlanGoalsSelector } from "../../FinPlan/redux/selectors";
import {
  incomeSourcesSelector,
  accountsSelector,
  spendingCategoriesSelector
} from "../../Budget/redux/selectors";

export default function useBalanceProjection() {
  useSecureRoute();
  // TODO: Grab currency exchange rate from some open data source instead of hardcoding
  const currencyMappingToUAH = {
    EUR: 32.5,
    USD: 27.3,
    UAH: 1
  };

  const [possibleReducing, setPossibleReducing] = useState(false);
  const incomeSources = useSelector(incomeSourcesSelector);
  const accounts = useSelector(accountsSelector);
  const spendingCategories = useSelector(spendingCategoriesSelector);
  const goals = useSelector(finPlanGoalsSelector);

  // Spending categories which we can reduce
  const reducedCategories = spendingCategories
    .map((category) => {
      if (!category.isMandatory) {
        return category;
      } else if (category.reducingAmount && category.reducingAmount > 0) {
        return { ...category, expectedAmount: category.reducingAmount };
      }
      return null;
    })
    .filter((category) => category);

  // Apply reducingAmount for countings when possibleReducing is true
  const categoriesWithReducing = spendingCategories.map((category) => {
    if (category.reducingAmount && category.reducingAmount > 0) {
      return {
        ...category,
        expectedAmount: +category.expectedAmount - +category.reducingAmount
      };
    }
    return category;
  });

  function sumReducer(total, current) {
    let amount = current.expectedAmount;
    if (typeof amount === "undefined") {
      amount = current.balance;
    }
    const amountToUAH = amount * currencyMappingToUAH[current.currency];
    if (current.frequency) {
      if (current.frequency === "daily") {
        // ~Working month
        return total + amountToUAH * 21;
      } else if (current.frequency === "weekly") {
        return total + amountToUAH * 4;
      }
    }
    return total + amountToUAH;
  }
  const totalIncome = incomeSources.reduce(sumReducer, 0);
  const currentBalance = accounts.reduce(sumReducer, 0);
  const totalSpendings = possibleReducing
    ? categoriesWithReducing.reduce(sumReducer, 0)
    : spendingCategories.reduce(sumReducer, 0);

  const totalFinancialGoalsPrice = goals.reduce(sumReducer, 0);
  const monthsToPositiveBalance = Math.round(
    Math.abs(currentBalance / (totalIncome - totalSpendings))
  );

  const monthsToAchieveAllFinancialGoals =
    monthsToPositiveBalance +
    Math.round(totalFinancialGoalsPrice / (totalIncome - totalSpendings));

  function buildFinPlanSchedule() {
    // Make copy of accounts since we're going to manipulate items of debts array directly
    let debts = cloneDeep(accounts)
      .filter((account) => account.balance < 0)
      .sort((a, b) => a.payoutPriority - b.payoutPriority);
    let credits = debts.filter((account) => account.requiredPayment > 0);
    let checkPoints = [
      ...cloneDeep(debts),
      ...goals.map((goal) => ({
        ...goal,
        balance: +goal.expectedAmount * currencyMappingToUAH[goal.currency],
        currency: "UAH"
      }))
    ].sort(
      (a, b) =>
        (a.payoutPriority || a.achievementPriority) -
        (b.payoutPriority || b.achievementPriority)
    );

    const today = new Date();
    const monthsMap = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let startingMonthNumber = today.getMonth() + 1;
    let year = today.getFullYear();
    let currentMonthNumber = startingMonthNumber;
    const schedule = [];
    let totalBalance = currentBalance;
    // TODO: Refactor this cycle when will move it to BE. This might be simplified significantly!
    while (monthsToAchieveAllFinancialGoals > schedule.length) {
      const paidDebts = [];
      const month = monthsMap[currentMonthNumber];
      let monthPossiblePayoutBalance = totalIncome - totalSpendings;
      credits = credits
        .map((credit) => {
          const creditBalanceToUAH =
            +credit.balance * currencyMappingToUAH[credit.currency];
          if (creditBalanceToUAH === 0) {
            return null;
          }
          const creditRequiredPaymentToUAH =
            +credit.requiredPayment * currencyMappingToUAH[credit.currency];
          const debtIndex = checkPoints.findIndex(
            (debt) => debt.id === credit.id
          );
          if (Math.abs(creditBalanceToUAH) < creditRequiredPaymentToUAH) {
            const paidDebt = {
              ...credit,
              balance: Math.abs(creditBalanceToUAH),
              currency: "UAH",
              paid: true
            };
            totalBalance += creditBalanceToUAH;
            monthPossiblePayoutBalance -= creditBalanceToUAH;
            paidDebts.push(paidDebt);
            if (checkPoints[debtIndex]) {
              checkPoints[debtIndex].balance = 0;
            }
            return null;
          } else {
            const debtLeft = {
              ...credit,
              balance: creditBalanceToUAH + creditRequiredPaymentToUAH,
              currency: "UAH"
            };
            const paidDebt = {
              ...credit,
              balance: creditRequiredPaymentToUAH,
              currency: "UAH"
            };
            totalBalance += creditRequiredPaymentToUAH;
            monthPossiblePayoutBalance -= creditRequiredPaymentToUAH;
            paidDebts.push(paidDebt);
            checkPoints[debtIndex] = {
              ...checkPoints[debtIndex],
              currency: "UAH",
              balance: debtLeft.balance
            };
            return debtLeft;
          }
        })
        .filter((credit) => credit);
      checkPoints = checkPoints
        .map((debt) => {
          const debtBalanceToUAH =
            +debt.balance * currencyMappingToUAH[debt.currency];
          if (debtBalanceToUAH === 0) {
            return null;
          }
          const creditIndex = credits.findIndex(
            (credit) => credit.id === debt.id
          );
          if (Math.abs(debtBalanceToUAH) < monthPossiblePayoutBalance) {
            totalBalance += Math.abs(debtBalanceToUAH);
            monthPossiblePayoutBalance -= Math.abs(debtBalanceToUAH);
            paidDebts.push({
              ...debt,
              balance: Math.abs(+debtBalanceToUAH),
              paid: true
            });
            if (debtBalanceToUAH > 0) {
              // We achieved financial goal, so we need reduce total balance amount.
              // Kind of "buy" what we wanted to buy.
              const goal = goals.find((goal) => goal.id === debt.id);
              const initialGoalPrice =
                goal.expectedAmount * currencyMappingToUAH[goal.currency];
              totalBalance -= initialGoalPrice;
            }
            if (credits[creditIndex]) {
              credits[creditIndex].balance = 0;
            }
            return null; // Debt is settled
          } else {
            if (debtBalanceToUAH > 0 && monthPossiblePayoutBalance > 0) {
              // This is not a debt, but financial goal. And we have some cash available to achieve that :)
              totalBalance += monthPossiblePayoutBalance;
              const debtLeft = {
                ...debt,
                balance: debtBalanceToUAH - monthPossiblePayoutBalance,
                currency: "UAH"
              };
              const paidDebt = {
                ...debt,
                balance: monthPossiblePayoutBalance,
                currency: "UAH"
              };
              monthPossiblePayoutBalance = 0;
              paidDebts.push(paidDebt);
              return debtLeft;
            }
            if (monthPossiblePayoutBalance > 0) {
              totalBalance += monthPossiblePayoutBalance;
              const debtLeft = {
                ...debt,
                balance: debtBalanceToUAH + monthPossiblePayoutBalance,
                currency: "UAH"
              };
              const paidDebt = {
                ...debt,
                balance: monthPossiblePayoutBalance,
                currency: "UAH"
              };
              if (credits[creditIndex]) {
                credits[creditIndex].balance = debtLeft.balance;
              }
              monthPossiblePayoutBalance = 0;
              paidDebts.push(paidDebt);
              return debtLeft;
            }
            return debt;
          }
        })
        .filter((debt) => debt);
      const scheduleItem = {
        date: `${month} ${year}`,
        month,
        year,
        paidDebts,
        totalBalance
      };
      schedule.push(scheduleItem);
      if (currentMonthNumber === 11) {
        currentMonthNumber = 0;
        year += 1;
      } else {
        currentMonthNumber++;
      }
    }
    return schedule;
  }
  const finPlanSchedule = buildFinPlanSchedule();

  function handlePossibleReducingChange(event) {
    setPossibleReducing(event.target.checked);
  }

  return {
    totalIncome,
    currentBalance,
    totalSpendings,
    monthsToPositiveBalance,
    finPlanSchedule,
    reducedCategories,
    handlePossibleReducingChange,
    possibleReducing,
    totalFinancialGoalsPrice,
    monthsToAchieveAllFinancialGoals
  };
}
