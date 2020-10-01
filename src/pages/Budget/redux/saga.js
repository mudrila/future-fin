import { all } from "redux-saga/effects";

import { createCRUDSagaWatcher } from "../../../store/utils/sagaUtils";

import {
  BUDGET_INCOME_SOURCES_ACTION_TYPES,
  BUDGET_ACCOUNTS_ACTION_TYPES,
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES,
  BUDGET_TRANSACTIONS_ACTION_TYPES,
  budgetIncomesActionCreators,
  budgetAccountsActionCreators,
  budgetSpendingCategoriesActionCreators,
  budgetTransactionsActionCreators
} from "./actions";

import {
  incomeSourceRequests,
  budgetAccountRequests,
  spendingCategoriesRequests,
  transactionRequests
} from "./requests";

const budgetIncomeSourcesWatcher = createCRUDSagaWatcher({
  actionTypes: BUDGET_INCOME_SOURCES_ACTION_TYPES,
  actionCreatorsFacade: budgetIncomesActionCreators,
  requestsHandlersFacade: incomeSourceRequests,
  readIsList: true
});

const budgetAccountWatcher = createCRUDSagaWatcher({
  actionTypes: BUDGET_ACCOUNTS_ACTION_TYPES,
  actionCreatorsFacade: budgetAccountsActionCreators,
  requestsHandlersFacade: budgetAccountRequests,
  readIsList: true
});

const budgetSpendingCategoriesWatcher = createCRUDSagaWatcher({
  actionTypes: BUDGET_SPENDING_CATEGORIES_ACTION_TYPES,
  actionCreatorsFacade: budgetSpendingCategoriesActionCreators,
  requestsHandlersFacade: spendingCategoriesRequests,
  readIsList: true
});

const budgetTransactionWatcher = createCRUDSagaWatcher({
  actionTypes: BUDGET_TRANSACTIONS_ACTION_TYPES,
  actionCreatorsFacade: budgetTransactionsActionCreators,
  requestsHandlersFacade: transactionRequests,
  readIsList: true
});

export default function* budgetSagaWatcher() {
  yield all([
    budgetAccountWatcher(),
    budgetIncomeSourcesWatcher(),
    budgetSpendingCategoriesWatcher(),
    budgetTransactionWatcher()
  ]);
}
