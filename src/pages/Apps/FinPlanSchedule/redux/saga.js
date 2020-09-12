import { takeEvery, put } from "redux-saga/effects";

import {
  FIN_PLAN_SCHEDULE_ACTION_TYPES,
  finPlanScheduleActionCreators
} from "./actions";
import { getFinPlanSchedule } from "./requests";

function* getFinPlanScheduleWorker({ payload, enqueueSnackbar }) {
  const loadingAction = finPlanScheduleActionCreators.LOADING();
  yield put(loadingAction);
  try {
    const result = yield getFinPlanSchedule(payload);
    const getFinPlanScheduleSuccessAction = finPlanScheduleActionCreators.SUCCESS(
      { ...result.finPlanSchedule }
    );
    yield put(getFinPlanScheduleSuccessAction);
  } catch (e) {
    const errorAction = finPlanScheduleActionCreators.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

export default function* finPlanScheduleWathcer() {
  yield takeEvery(
    FIN_PLAN_SCHEDULE_ACTION_TYPES.REQUEST,
    getFinPlanScheduleWorker
  );
}
