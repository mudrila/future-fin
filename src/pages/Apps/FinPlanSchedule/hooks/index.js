import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import useSecureRoute from "../../../../hooks/useSecureRoute";

import { finPlanScheduleActionCreators } from "../redux/actions";
import { finPlanScheduleDataSelector } from "../redux/selectors";

export default function useBalanceProjection() {
  useSecureRoute();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [possibleReducing, setPossibleReducing] = useState(false);
  const {
    totalIncome,
    currentBalance,
    totalSpendings,
    monthsToPositiveBalance,
    monthsToAchieveAllFinancialGoals,
    items: finPlanSchedule,
    reducedCategories,
    totalFinancialGoalsPrice
  } = useSelector(finPlanScheduleDataSelector);

  function handlePossibleReducingChange(event) {
    setPossibleReducing(event.target.checked);
  }

  useEffect(() => {
    const loadFinPlanScheduleData = finPlanScheduleActionCreators.REQUEST(
      { possibleReducing },
      enqueueSnackbar
    );
    dispatch(loadFinPlanScheduleData);
  }, [possibleReducing]);

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
