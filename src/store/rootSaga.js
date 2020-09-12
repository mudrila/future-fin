import { all } from "redux-saga/effects";

import budgetSagaWatcher from "../pages/Apps/Budget/redux/saga";
import finPlanWatcher from "../pages/Apps/FinPlan/redux/saga";
import finPlanScheduleWathcer from "../pages/Apps/FinPlanSchedule/redux/saga";
import userWatcher from "../pages/User/redux/saga";

export default function* rootSaga() {
  yield all([
    budgetSagaWatcher(),
    finPlanWatcher(),
    userWatcher(),
    finPlanScheduleWathcer()
  ]);
}
