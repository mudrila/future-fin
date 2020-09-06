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

function* budgetIncomeSourceUpdateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = budgetIncomesActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const updateIncomeSourceSuccessAction = budgetIncomesActionCreators.UPDATE.SUCCESS(
      payload
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
    console.log(payload, "DELETE");
    const result = yield incomeSourceRequests.DELETE(null, {
      path: payload._id
    });
    console.log(result);
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

function* budgetAccountCreateWorker({ payload }) {
  const loadingAction = budgetAccountsActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  const createAccountSuccessAction = budgetAccountsActionCreators.CREATE.SUCCESS(
    payload
  );
  yield put(createAccountSuccessAction);
}

function* budgetAccountUpdateWorker({ payload }) {
  const loadingAction = budgetAccountsActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  const updateAccountSuccessAction = budgetAccountsActionCreators.UPDATE.SUCCESS(
    payload
  );
  yield put(updateAccountSuccessAction);
}

function* budgetAccountDeleteWorker({ payload }) {
  const loadingAction = budgetAccountsActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  const deleteAccountSuccessAction = budgetAccountsActionCreators.DELETE.SUCCESS(
    payload
  );
  yield put(deleteAccountSuccessAction);
}

function* budgetSpendingCategoryCreateWorker({ payload }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  const createSpendingCategorySuccessAction = budgetSpendingCategoriesActionCreators.CREATE.SUCCESS(
    payload
  );
  yield put(createSpendingCategorySuccessAction);
}

function* budgetSpendingCategoryUpdateWorker({ payload }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  const updateSpendingCategorySuccessAction = budgetSpendingCategoriesActionCreators.UPDATE.SUCCESS(
    payload
  );
  yield put(updateSpendingCategorySuccessAction);
}

function* budgetSpendingCategoryDeleteWorker({ payload }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  const deleteSpendingCategorySuccessAction = budgetSpendingCategoriesActionCreators.DELETE.SUCCESS(
    payload
  );
  yield put(deleteSpendingCategorySuccessAction);
}

export default function* budgetSagaWatcher() {
  // Income Sources
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.REQUEST,
    budgetIncomeSourceCreateWorker
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
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.UPDATE.REQUEST,
    budgetSpendingCategoryUpdateWorker
  );
  yield takeEvery(
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.DELETE.REQUEST,
    budgetSpendingCategoryDeleteWorker
  );
}
