import { takeEvery, put } from "redux-saga/effects";
import {
  BUDGET_INCOME_SOURCES_ACTION_TYPES,
  BUDGET_ACCOUNTS_ACTION_TYPES,
  BUDGET_SPENDING_CATEGORIES_ACTION_TYPES,
  budgetIncomesActionCreators,
  budgetAccountsActionCreators,
  budgetSpendingCategoriesActionCreators
} from "./actions";

// TODO: cover everything with actual requests.
// Since there is no server for now - I just put sagas as "placeholders"
// And they simply dispatch loading action and success action

function* budgetIncomeSourceCreateWorker({ payload }) {
  const loadingAction = budgetIncomesActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  const createIncomeSourceSuccessAction = budgetIncomesActionCreators.CREATE.SUCCESS(
    payload
  );
  yield put(createIncomeSourceSuccessAction);
}

function* budgetIncomeSourceDeleteWorker({ payload }) {
  const loadingAction = budgetIncomesActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  const deleteIncomeSourceSuccessAction = budgetIncomesActionCreators.DELETE.SUCCESS(
    payload
  );
  yield put(deleteIncomeSourceSuccessAction);
}

function* budgetAccountCreateWorker({ payload }) {
  const loadingAction = budgetAccountsActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  const createAccountSuccessAction = budgetAccountsActionCreators.CREATE.SUCCESS(
    payload
  );
  yield put(createAccountSuccessAction);
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

function* budgetSpendingCategoryDeleteWorker({ payload }) {
  const loadingAction = budgetSpendingCategoriesActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  const deleteSpendingCategorySuccessAction = budgetSpendingCategoriesActionCreators.DELETE.SUCCESS(
    payload
  );
  yield put(deleteSpendingCategorySuccessAction);
}

export default function* budgetSagaWatcher() {
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.REQUEST,
    budgetIncomeSourceCreateWorker
  );
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.DELETE.REQUEST,
    budgetIncomeSourceDeleteWorker
  );
  yield takeEvery(
    BUDGET_ACCOUNTS_ACTION_TYPES.CREATE.REQUEST,
    budgetAccountCreateWorker
  );
  yield takeEvery(
    BUDGET_ACCOUNTS_ACTION_TYPES.DELETE.REQUEST,
    budgetAccountDeleteWorker
  );
  yield takeEvery(
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.CREATE.REQUEST,
    budgetSpendingCategoryCreateWorker
  );
  yield takeEvery(
    BUDGET_SPENDING_CATEGORIES_ACTION_TYPES.DELETE.REQUEST,
    budgetSpendingCategoryDeleteWorker
  );
}
