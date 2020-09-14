import { takeEvery, put } from "redux-saga/effects";

import { finPlanGoalsRequests, getFinPlanHealth } from "./requests";

import {
  FIN_PLAN_GOALS_ACTION_TYPES,
  FIN_HEALTH_ACTION_TYPES,
  finHealthActionCreators,
  finPlanGoalsActionCreators
} from "./actions";

function* finPlanGoalCreateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = finPlanGoalsActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield finPlanGoalsRequests.CREATE(payload);
    const createFinPlanGoalSuccessAction = finPlanGoalsActionCreators.CREATE.SUCCESS(
      result.newGoal
    );
    yield put(createFinPlanGoalSuccessAction);
  } catch (e) {
    const errorAction = finPlanGoalsActionCreators.CREATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* finPlanGoalGetListWorker({ enqueueSnackbar }) {
  const loadingAction = finPlanGoalsActionCreators.READ.LOADING();
  yield put(loadingAction);
  try {
    const result = yield finPlanGoalsRequests.READ(null, { path: "list" });
    const getFinPlanGoalsSuccessAction = finPlanGoalsActionCreators.READ.SUCCESS(
      result.goals
    );
    yield put(getFinPlanGoalsSuccessAction);
  } catch (e) {
    const errorAction = finPlanGoalsActionCreators.CREATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* finPlanGoalUpdateWorker({ payload, enqueueSnackbar }) {
  const loadingAction = finPlanGoalsActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield finPlanGoalsRequests.UPDATE(payload, {
      path: payload._id
    });
    const updateFinPlanGoalSuccessAction = finPlanGoalsActionCreators.UPDATE.SUCCESS(
      result.goal
    );
    yield put(updateFinPlanGoalSuccessAction);
  } catch (e) {
    const errorAction = finPlanGoalsActionCreators.UPDATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* finPlanGoalDeleteWorker({ payload, enqueueSnackbar }) {
  const loadingAction = finPlanGoalsActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  try {
    yield finPlanGoalsRequests.DELETE(null, { path: payload._id });
    const deleteFinPlanGoalSuccessAction = finPlanGoalsActionCreators.DELETE.SUCCESS(
      payload
    );
    yield put(deleteFinPlanGoalSuccessAction);
  } catch (e) {
    const errorAction = finPlanGoalsActionCreators.DELETE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* getFinHealthData({ payload, enqueueSnackbar }) {
  const loadingAction = finHealthActionCreators.LOADING();
  yield put(loadingAction);
  try {
    const result = yield getFinPlanHealth(payload);
    const successAction = finHealthActionCreators.SUCCESS(result);
    yield put(successAction);
  } catch (e) {
    const errorAction = finHealthActionCreators.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}
export default function* finPlanWatcher() {
  yield takeEvery(
    FIN_PLAN_GOALS_ACTION_TYPES.CREATE.REQUEST,
    finPlanGoalCreateWorker
  );
  yield takeEvery(
    FIN_PLAN_GOALS_ACTION_TYPES.READ.REQUEST,
    finPlanGoalGetListWorker
  );
  yield takeEvery(
    FIN_PLAN_GOALS_ACTION_TYPES.UPDATE.REQUEST,
    finPlanGoalUpdateWorker
  );
  yield takeEvery(
    FIN_PLAN_GOALS_ACTION_TYPES.DELETE.REQUEST,
    finPlanGoalDeleteWorker
  );

  yield takeEvery(FIN_HEALTH_ACTION_TYPES.REQUEST, getFinHealthData);
}
