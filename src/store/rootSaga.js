import { all } from "redux-saga/effects";

import budgetSagaWatcher from "../pages/Budget/redux/saga";
import finPlanWatcher from "../pages/FinPlan/redux/saga";
import finPlanScheduleWathcer from "../pages/FinPlanSchedule/redux/saga";
import userWatcher from "../pages/User/redux/saga";
import appSettingsWatcher from "../pages/Settings/redux/saga";

export default function* rootSaga() {
  yield all([
    budgetSagaWatcher(),
    finPlanWatcher(),
    userWatcher(),
    finPlanScheduleWathcer(),
    appSettingsWatcher()
  ]);
}
