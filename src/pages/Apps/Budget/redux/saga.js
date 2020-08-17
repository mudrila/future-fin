import { takeEvery, put } from "redux-saga/effects";
import {
  BUDGET_INCOME_SOURCES_ACTION_TYPES,
  BUDGET_ACCOUNTS_ACTION_TYPES,
  budgetIncomesActionCreators,
  budgetAccountsActionCreators
} from "./actions";

// TODO: cover everything with actual requests.
// Since there is no server for now - I just put sagas as "placeholders"
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
}
