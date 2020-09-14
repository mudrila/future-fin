import { takeEvery, put } from "redux-saga/effects";

import {
  BUDGET_INCOME_SOURCES_ACTION_TYPES,
  BUDGET_ACCOUNTS_ACTION_TYPES,
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES,
  budgetIncomesActionCreators,
  budgetAccountsActionCreators,
  budgetSpendingCategoriesActionCreators
} from "./actions";

import {
  incomeSourceRequests,
  budgetAccountRequests,
  spendingCategoriesRequests
} from "./requests";

function* budgetIncomeSourceCreateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetIncomesActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield incomeSourceRequests.CREATE(payload);
    const createIncomeSourceSuccessAction = budgetIncomesActionCreators.CREATE.SUCCESS(
      result.newIncomeSource
    );
    yield put(createIncomeSourceSuccessAction);
  } catch (e) {
    const errorAction = budgetIncomesActionCreators.CREATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetIncomeSourcesGetListWorker({ enqueueSnackbar }) {
  // Current data flow doesn't assume that we need to load data for particular
  // Income Source, so right now we would have only list GET, not a single GET.
  // Which of course might change in future.
  const loadingAction = budgetIncomesActionCreators.READ.LOADING();
  yield put(loadingAction);
  try {
    const result = yield incomeSourceRequests.READ(null, { path: "list" });
    const getIncomeSourcesListSuccessAction = budgetIncomesActionCreators.READ.SUCCESS(
      result.sources
    );
    yield put(getIncomeSourcesListSuccessAction);
  } catch (e) {
    const errorAction = budgetIncomesActionCreators.READ.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetIncomeSourceUpdateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetIncomesActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield incomeSourceRequests.UPDATE(payload, {
      path: payload._id
    });
    const updateIncomeSourceSuccessAction = budgetIncomesActionCreators.UPDATE.SUCCESS(
      result.incomeSource
    );
    yield put(updateIncomeSourceSuccessAction);
  } catch (e) {
    const errorAction = budgetIncomesActionCreators.UPDATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetIncomeSourceDeleteWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetIncomesActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  try {
    yield incomeSourceRequests.DELETE(null, {
      path: payload._id
    });
    const deleteIncomeSourceSuccessAction = budgetIncomesActionCreators.DELETE.SUCCESS(
      payload
    );
    yield put(deleteIncomeSourceSuccessAction);
  } catch (e) {
    const errorAction = budgetIncomesActionCreators.DELETE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetAccountCreateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetAccountsActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield budgetAccountRequests.CREATE(payload);
    const createAccountSuccessAction = budgetAccountsActionCreators.CREATE.SUCCESS(
      result.newAccount
    );
    yield put(createAccountSuccessAction);
  } catch (e) {
    const errorAction = budgetAccountsActionCreators.CREATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetAccountGetListWorker({ enqueueSnackbar }) {
  const loadingAction = budgetAccountsActionCreators.READ.LOADING();
  yield put(loadingAction);
  try {
    const result = yield budgetAccountRequests.READ(null, { path: "list" });
    const getAccountsListSuccessAction = budgetAccountsActionCreators.READ.SUCCESS(
      result.accounts
    );
    yield put(getAccountsListSuccessAction);
  } catch (e) {
    const errorAction = budgetAccountsActionCreators.READ.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetAccountUpdateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetAccountsActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield budgetAccountRequests.UPDATE(payload, {
      path: payload._id
    });
    const updateAccountSuccessAction = budgetAccountsActionCreators.UPDATE.SUCCESS(
      result.account
    );
    yield put(updateAccountSuccessAction);
  } catch (e) {
    const errorAction = budgetAccountsActionCreators.UPDATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetAccountDeleteWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetAccountsActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  try {
    yield budgetAccountRequests.DELETE(null, { path: payload._id });
    const deleteAccountSuccessAction = budgetAccountsActionCreators.DELETE.SUCCESS(
      payload
    );
    yield put(deleteAccountSuccessAction);
  } catch (e) {
    const errorAction = budgetAccountsActionCreators.DELETE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetSpendingCategoryCreateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield spendingCategoriesRequests.CREATE(payload);
    const createSpendingCategorySuccessAction = budgetSpendingCategoriesActionCreators.CREATE.SUCCESS(
      result.newSpendingCategory
    );
    yield put(createSpendingCategorySuccessAction);
  } catch (e) {
    const errorAction = budgetSpendingCategoriesActionCreators.DELETE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetSpendingCategoryGetListWorker({ enqueueSnackbar }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.READ.LOADING();
  yield put(loadingAction);
  try {
    const result = yield spendingCategoriesRequests.READ(null, {
      path: "list"
    });
    const getSpendingCategoriesListSuccessAction = budgetSpendingCategoriesActionCreators.READ.SUCCESS(
      result.spendingCategories
    );
    yield put(getSpendingCategoriesListSuccessAction);
  } catch (e) {
    const errorAction = budgetSpendingCategoriesActionCreators.READ.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetSpendingCategoryUpdateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield spendingCategoriesRequests.UPDATE(payload, {
      path: payload._id
    });
    const updateSpendingCategorySuccessAction = budgetSpendingCategoriesActionCreators.UPDATE.SUCCESS(
      result.spendingCategory
    );
    yield put(updateSpendingCategorySuccessAction);
  } catch (e) {
    const errorAction = budgetSpendingCategoriesActionCreators.UPDATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* budgetSpendingCategoryDeleteWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  try {
    yield spendingCategoriesRequests.DELETE(null, { path: payload._id });
    const deleteSpendingCategorySuccessAction = budgetSpendingCategoriesActionCreators.DELETE.SUCCESS(
      payload
    );
    yield put(deleteSpendingCategorySuccessAction);
  } catch (e) {
    const errorAction = budgetSpendingCategoriesActionCreators.DELETE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

export default function* budgetSagaWatcher() {
  // Income Sources
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.REQUEST,
    budgetIncomeSourceCreateWorker
  );
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.READ.REQUEST,
    budgetIncomeSourcesGetListWorker
  );
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.UPDATE.REQUEST,
    budgetIncomeSourceUpdateWorker
  );
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.DELETE.REQUEST,
    budgetIncomeSourceDeleteWorker
  );

  // Accounts
  yield takeEvery(
    BUDGET_ACCOUNTS_ACTION_TYPES.CREATE.REQUEST,
    budgetAccountCreateWorker
  );
  yield takeEvery(
    BUDGET_ACCOUNTS_ACTION_TYPES.READ.REQUEST,
    budgetAccountGetListWorker
  );
  yield takeEvery(
    BUDGET_ACCOUNTS_ACTION_TYPES.UPDATE.REQUEST,
    budgetAccountUpdateWorker
  );
  yield takeEvery(
    BUDGET_ACCOUNTS_ACTION_TYPES.DELETE.REQUEST,
    budgetAccountDeleteWorker
  );

  // Spending Categories
  yield takeEvery(
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.CREATE.REQUEST,
    budgetSpendingCategoryCreateWorker
  );
  yield takeEvery(
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.READ.REQUEST,
    budgetSpendingCategoryGetListWorker
  );
  yield takeEvery(
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.UPDATE.REQUEST,
    budgetSpendingCategoryUpdateWorker
  );
  yield takeEvery(
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.DELETE.REQUEST,
    budgetSpendingCategoryDeleteWorker
  );
}
