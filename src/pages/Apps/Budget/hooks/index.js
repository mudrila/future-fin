import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import createBudgetDashboardConfig from "../config/dashboard";
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
import { appSettingsSelector } from "../../../Settings/redux/selectors";
import sumReducer from "../../utils/sumReducer";
import { useTranslation } from "../../../../i18n";

export default function useBudgetDashboard() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const budgetDashbaordConfig = createBudgetDashboardConfig(t);
  const { enqueueSnackbar } = useSnackbar();
  const {
    settings: { defaultCurrency }
  } = useSelector(appSettingsSelector);
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

  const totalIncome = incomeSources.reduce(sumReducer, 0);
  const currentBalance = accounts.reduce(sumReducer, 0);
  const totalSpendings = spendingCategories.reduce(sumReducer, 0);

  const entityParts = budgetDashbaordConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: budgetDataMapping[entityPart.name] || []
  }));

  useEffect(() => {
    const loadIncomeSources = budgetIncomesActionCreators.READ.REQUEST(
      null,
      enqueueSnackbar
    );
    const loadAccounts = budgetAccountsActionCreators.READ.REQUEST(
      null,
      enqueueSnackbar
    );
    const loadSpendingCategories = budgetSpendingCategoriesActionCreators.READ.REQUEST(
      null,
      enqueueSnackbar
    );
    dispatch(loadIncomeSources);
    dispatch(loadAccounts);
    dispatch(loadSpendingCategories);
  }, []);

  return {
    handleSubmit,
    entityName: budgetDashbaordConfig.entityName,
    entityParts,
    formsConfig: budgetDashbaordConfig.formsConfig,
    handleEdit,
    handleDelete,
    totalIncome,
    currentBalance,
    totalSpendings,
    t,
    defaultCurrency
  };
}
