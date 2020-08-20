import { useSelector } from "react-redux";
import finplanDashboardConfig from "../config/dashboard";

import {
  incomeSourcesSelector,
  accountsSelector,
  spendingCategoriesSelector
} from "../../Budget/redux/selectors";

export default function useFinPlanDashboard() {
  // TODO: Grab currency exchange rate from some open data source instead of hardcoding
  const currencyMappingToUAH = {
    EUR: 32.5,
    USD: 27.3,
    UAH: 1
  };

  const incomeSources = useSelector(incomeSourcesSelector);
  const accounts = useSelector(accountsSelector);
  const spendingCategories = useSelector(spendingCategoriesSelector);

  const finPlanDataMapping = {};

  const entityParts = finplanDashboardConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: finPlanDataMapping[entityPart.name] || []
  }));

  function sumReducer(total, current) {
    const amountToUAH =
      +(current.expectedAmount || current.balance) *
      currencyMappingToUAH[current.currency];
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
  const totalSpendings = spendingCategories.reduce(sumReducer, 0);

  const monthsToPositiveBalance = Math.round(
    Math.abs(currentBalance / (totalIncome - totalSpendings))
  );

  function buildPayoutSchedule() {
    let balance = currentBalance;
    let debts = accounts
      .filter((account) => account.balance < 0)
      .sort((a, b) => a.payoutPriority - b.payoutPriority);
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
      debts = debts
        .map((debt) => {
          const debtBalanceToUAH =
            +debt.balance * currencyMappingToUAH[debt.currency];
          if (Math.abs(debtBalanceToUAH) < monthPossiblePayoutBalance) {
            monthPossiblePayoutBalance -= Math.abs(debtBalanceToUAH);
            paidDebts.push({ ...debt, balance: Math.abs(+debtBalanceToUAH) });
            return null;
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
  return {
    incomeSources,
    accounts,
    spendingCategories,
    entityParts,
    entityName: finplanDashboardConfig.entityName,
    formsConfig: finplanDashboardConfig.formsConfig,
    totalIncome,
    currentBalance,
    totalSpendings,
    monthsToPositiveBalance,
    payoutSchedule
  };
}
