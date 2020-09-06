import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import useSecureRoute from "../../../../hooks/useSecureRoute";
import budgetDashbaordConfig from "../config/dashboard";
import {
  budgetIncomesActionCreators,
  budgetAccountsActionCreators,
  budgetSpendingCategoriesActionCreators
} from "../redux/actions";
import {
  incomeSourcesSelector,
  accountsSelector,
  spendingCategoriesSelector
} from "../redux/selectors";

export default function useBudgetDashboard() {
  const { enqueueSnackbar } = useSnackbar();
  useSecureRoute();
  const dispatch = useDispatch();
  const incomeSources = useSelector(incomeSourcesSelector);
  const accounts = useSelector(accountsSelector);
  const spendingCategories = useSelector(spendingCategoriesSelector);

  const budgetDataMapping = {
    incomes: incomeSources,
    accounts,
    spendings: spendingCategories
  };

  function handleSubmit(formName, formValues) {
    let action = null;
    if (formName === "incomes") {
      action = budgetIncomesActionCreators.CREATE.REQUEST(
        formValues,
        enqueueSnackbar
      );
    } else if (formName === "accounts") {
      action = budgetAccountsActionCreators.CREATE.REQUEST(
        formValues,
        enqueueSnackbar
      );
    } else if (formName === "spendings") {
      action = budgetSpendingCategoriesActionCreators.CREATE.REQUEST(
        formValues,
        enqueueSnackbar
      );
    }
    action && dispatch(action);
  }
  function handleEdit({ entityPartName, item }) {
    let action = null;
    if (entityPartName === "incomes") {
      action = budgetIncomesActionCreators.UPDATE.REQUEST(
        item,
        enqueueSnackbar
      );
    } else if (entityPartName === "accounts") {
      action = budgetAccountsActionCreators.UPDATE.REQUEST(
        item,
        enqueueSnackbar
      );
    } else if (entityPartName === "spendings") {
      action = budgetSpendingCategoriesActionCreators.UPDATE.REQUEST(
        item,
        enqueueSnackbar
      );
    }
    action && dispatch(action);
  }
  function handleDelete({ entityPartName, item }) {
    let action = null;
    if (entityPartName === "incomes") {
      action = budgetIncomesActionCreators.DELETE.REQUEST(
        item,
        enqueueSnackbar
      );
    } else if (entityPartName === "accounts") {
      action = budgetAccountsActionCreators.DELETE.REQUEST(
        item,
        enqueueSnackbar
      );
    } else if (entityPartName === "spendings") {
      action = budgetSpendingCategoriesActionCreators.DELETE.REQUEST(
        item,
        enqueueSnackbar
      );
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
