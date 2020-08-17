import { useDispatch, useSelector } from "react-redux";

import budgetDashbaordConfig from "../config/dashboard";
import {
  budgetIncomesActionCreators,
  budgetAccountsActionCreators
} from "../redux/actions";
import { incomeSourcesSelector, accountsSelector } from "../redux/selectors";

export default function useBudgetDashboard() {
  const dispatch = useDispatch();
  const incomeSources = useSelector(incomeSourcesSelector);
  const accounts = useSelector(accountsSelector);

  const budgetDataMapping = {
    incomes: incomeSources,
    accounts
  };

  function handleSubmit(formName, formValues) {
    let action = null;
    if (formName === "incomes") {
      action = budgetIncomesActionCreators.CREATE.REQUEST(formValues);
    } else if (formName === "accounts") {
      action = budgetAccountsActionCreators.CREATE.REQUEST(formValues);
    }
    dispatch(action);
  }
  function handleEdit({ entityPartName, item }) {
    let action = null;
    if (entityPartName === "incomes") {
      action = budgetIncomesActionCreators.UPDATE.REQUEST(item);
    } else if (entityPartName === "accounts") {
      action = budgetAccountsActionCreators.UPDATE.REQUEST(item);
    }
    action && dispatch(action);
  }
  function handleDelete({ entityPartName, item }) {
    let action = null;
    if (entityPartName === "incomes") {
      action = budgetIncomesActionCreators.DELETE.REQUEST(item);
    } else if (entityPartName === "accounts") {
      action = budgetAccountsActionCreators.DELETE.REQUEST(item);
    }
    action && dispatch(action);
  }
  const entityParts = budgetDashbaordConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: budgetDataMapping[entityPart.name] || []
  }));
  return {
    handleSubmit,
    entityName: budgetDashbaordConfig.entityName,
    entityParts,
    formsConfig: budgetDashbaordConfig.formsConfig,
    handleEdit,
    handleDelete
  };
}
