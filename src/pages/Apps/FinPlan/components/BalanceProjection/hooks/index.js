import { useState } from "react";
import { useSelector } from "react-redux";
import { cloneDeep } from "lodash";

import {
  incomeSourcesSelector,
  accountsSelector,
  spendingCategoriesSelector
} from "../../../../Budget/redux/selectors";

export default function useBalanceProjection() {
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

  const monthsToPositiveBalance = Math.round(
    Math.abs(currentBalance / (totalIncome - totalSpendings))
  );

  function buildPayoutSchedule() {
    // Make copy of accounts since we're going to manipulate items of debts array directly
    let debts = cloneDeep(accounts)
      .filter((account) => account.balance < 0)
      .sort((a, b) => a.payoutPriority - b.payoutPriority);
    let credits = debts.filter((account) => account.requiredPayment > 0);

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
    let currentMonthNumber = today.getMonth();
    const schedule = [];
    while (monthsToPositiveBalance + 1 > schedule.length) {
      const paidDebts = [];
      const month = monthsMap[currentMonthNumber + 1];
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
          const debtIndex = debts.findIndex((debt) => debt.id === credit.id);
          if (Math.abs(creditBalanceToUAH) < creditRequiredPaymentToUAH) {
            const paidDebt = {
              ...credit,
              balance: Math.abs(creditBalanceToUAH),
              currency: "UAH"
            };
            monthPossiblePayoutBalance -= creditBalanceToUAH;
            paidDebts.push(paidDebt);
            if (debts[debtIndex]) {
              debts[debtIndex].balance = 0;
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
            monthPossiblePayoutBalance -= creditRequiredPaymentToUAH;
            paidDebts.push(paidDebt);
            debts[debtIndex] = {
              ...debts[debtIndex],
              currency: "UAH",
              balance: debtLeft.balance
            };
            return debtLeft;
          }
        })
        .filter((credit) => credit);
      debts = debts
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
            monthPossiblePayoutBalance -= Math.abs(debtBalanceToUAH);
            paidDebts.push({ ...debt, balance: Math.abs(+debtBalanceToUAH) });
            if (credits[creditIndex]) {
              credits[creditIndex].balance = 0;
            }
            return null; // Debt is settled
          } else {
            if (monthPossiblePayoutBalance > 0) {
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
        month,
        paidDebts
      };
      schedule.push(scheduleItem);
      if (currentMonthNumber === 11) {
        currentMonthNumber = 0;
      } else {
        currentMonthNumber++;
      }
    }
    return schedule;
  }
  const payoutSchedule = buildPayoutSchedule();

  function handlePossibleReducingChange(event) {
    setPossibleReducing(event.target.checked);
  }

  return {
    totalIncome,
    currentBalance,
    totalSpendings,
    monthsToPositiveBalance,
    payoutSchedule,
    reducedCategories,
    handlePossibleReducingChange,
    possibleReducing
  };
}
