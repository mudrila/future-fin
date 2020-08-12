import { takeEvery, put } from "redux-saga/effects";
import { BUDGET_INCOME_SOURCES_ACTION_TYPES } from "../actions/types";
import { budgetIncomesActionCreators } from "../actions/actionCreators";

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

export default function* budgetSagaWatcher() {
  yield takeEvery(
    BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.REQUEST,
    budgetIncomeSourceCreateWorker
  );
}
