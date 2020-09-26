import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import createBudgetDashboardConfig from "../config/dashboard";
import {
  budgetIncomesActionCreators,
  budgetAccountsActionCreators,
  budgetSpendingCategoriesActionCreators,
  budgetTransactionsActionCreators
} from "../redux/actions";
import {
  incomeSourcesSelector,
  accountsSelector,
  spendingCategoriesSelector
} from "../redux/selectors";
import { appSettingsSelector } from "../../../Settings/redux/selectors";
import sumReducer from "../../utils/sumReducer";
import { useTranslation } from "../../../../i18n";

import { ItemTypes } from "../../../../ui-library/templates/Dashboard/config/dnd";

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

  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  const [transactionInitialData, setTransactionInitialData] = useState({});

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

  const totalIncome = incomeSources.reduce(
    (prev, curr) => sumReducer(prev, curr, defaultCurrency),
    0
  );
  const currentBalance = accounts.reduce(
    (prev, curr) => sumReducer(prev, curr, defaultCurrency),
    0
  );
  const totalSpendings = spendingCategories.reduce(
    (prev, curr) => sumReducer(prev, curr, defaultCurrency),
    0
  );

  const entityParts = budgetDashbaordConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: budgetDataMapping[entityPart.name] || []
  }));

  function openTransactionModal({ from, to }) {
    let transactionSource = {};
    let transactionDestination = {};
    let fromOptions = [];
    let toOptions = [];
    if (from.type === ItemTypes.INCOME) {
      // We're getting some income.
      transactionSource = incomeSources.find(
        (source) => source._id === from._id
      );
      transactionDestination = accounts.find(
        (account) => account._id === to._id
      );
      fromOptions = incomeSources.map((source) => ({
        label: source.name,
        value: source._id
      }));
      toOptions = accounts.map((account) => ({
        label: account.name,
        value: account._id
      }));
    } else if (
      from.type === ItemTypes.ACCOUNT &&
      to.type === ItemTypes.ACCOUNT
    ) {
      // Just transaction between accounts, like from debit card to wallet
      transactionSource = accounts.find((account) => account._id === from._id);
      transactionDestination = accounts.find(
        (account) => account._id === to._id
      );
      fromOptions = accounts.map((account) => ({
        label: account.name,
        value: account._id
      }));
      toOptions = fromOptions;
    } else if (
      from.type === ItemTypes.ACCOUNT &&
      to.type === ItemTypes.SPENDING
    ) {
      // Time to spend some money :D
      transactionSource = accounts.find((account) => account._id === from._id);
      transactionDestination = spendingCategories.find(
        (category) => category._id === to._id
      );
      fromOptions = accounts.map((account) => ({
        label: account.name,
        value: account._id
      }));
      toOptions = spendingCategories.map((category) => ({
        label: category.name,
        value: category._id
      }));
    }
    setTransactionInitialData({
      fromValue: {
        label: transactionSource.name,
        value: transactionSource._id
      },
      toValue: {
        label: transactionDestination.name,
        value: transactionDestination._id
      },
      fromOptions,
      toOptions
    });
    setTransactionModalOpen(true);
  }

  function handleTransactionModalClose() {
    setTransactionModalOpen(false);
  }

  function handleTransactionModalSubmit({ from, to, amount, comment, date }) {
    const newTransaction = {
      from: from.value,
      to: to.value,
      amount,
      comment,
      date
    };
    const newTransactionAction = budgetTransactionsActionCreators.CREATE.REQUEST(
      newTransaction,
      enqueueSnackbar
    );
    dispatch(newTransactionAction);
    handleTransactionModalClose();
  }

  function loadDashboardInitialData() {
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
  }

  useEffect(loadDashboardInitialData, []);

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
    defaultCurrency,
    openTransactionModal,
    handleTransactionModalClose,
    handleTransactionModalSubmit,
    transactionModalOpen,
    transactionInitialData
  };
}
