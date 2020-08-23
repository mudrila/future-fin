import { takeEvery, put } from "redux-saga/effects";
import {
  FIN_PLAN_GOALS_ACTION_TYPES,
  finPlanGoalsActionCreators
} from "./actions";

// TODO: cover everything with actual requests.
// Since there is no server for now - I just put sagas as "placeholders"
// And they simply dispatch loading action and success action

function* finPlanGoalCreateWorker({ payload }) {
  const loadingAction = finPlanGoalsActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  const createFinPlanGoalSuccessAction = finPlanGoalsActionCreators.CREATE.SUCCESS(
    payload
  );
  yield put(createFinPlanGoalSuccessAction);
}

function* finPlanGoalUpdateWorker({ payload }) {
  const loadingAction = finPlanGoalsActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  const updateFinPlanGoalSuccessAction = finPlanGoalsActionCreators.UPDATE.SUCCESS(
    payload
  );
  yield put(updateFinPlanGoalSuccessAction);
}

function* finPlanGoalDeleteWorker({ payload }) {
  const loadingAction = finPlanGoalsActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  const deleteFinPlanGoalSuccessAction = finPlanGoalsActionCreators.DELETE.SUCCESS(
    payload
  );
  yield put(deleteFinPlanGoalSuccessAction);
}

export default function* finPlanWatcher() {
  yield takeEvery(
    FIN_PLAN_GOALS_ACTION_TYPES.CREATE.REQUEST,
    finPlanGoalCreateWorker
  );
  yield takeEvery(
    FIN_PLAN_GOALS_ACTION_TYPES.UPDATE.REQUEST,
    finPlanGoalUpdateWorker
  );
  yield takeEvery(
    FIN_PLAN_GOALS_ACTION_TYPES.DELETE.REQUEST,
    finPlanGoalDeleteWorker
  );
}
