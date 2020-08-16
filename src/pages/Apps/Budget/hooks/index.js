import { useDispatch, useSelector } from "react-redux";

import budgetDashbaordConfig from "../config/dashboard";
import { budgetIncomesActionCreators } from "../redux/actions";
import { incomeSourcesSelector } from "../redux/selectors";

export default function useBudgetDashboard() {
  const dispatch = useDispatch();
  const incomeSources = useSelector(incomeSourcesSelector);

  const budgetDataMapping = {
    incomes: incomeSources
  };

  function handleSubmit(formName, formValues) {
    if (formName === "incomes") {
      const action = budgetIncomesActionCreators.CREATE.REQUEST(formValues);
      dispatch(action);
    }
  }
  const entityParts = budgetDashbaordConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: budgetDataMapping[entityPart.name] || []
  }));
  return {
    handleSubmit,
    entityName: budgetDashbaordConfig.entityName,
    entityParts,
    formsConfig: budgetDashbaordConfig.formsConfig
  };
}
