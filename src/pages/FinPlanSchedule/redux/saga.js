import { takeEvery, put } from "redux-saga/effects";

import { createBasicRequestWorker } from "../../../store/utils/sagaUtils";
import {
  FIN_PLAN_SCHEDULE_ACTION_TYPES,
  finPlanScheduleActionCreators
} from "./actions";
import { getFinPlanSchedule } from "./requests";

const getFinPlanScheduleWorker = createBasicRequestWorker({
  actionCreatorsFacade: finPlanScheduleActionCreators,
  requestHandler: getFinPlanSchedule,
  crudKey: "READ",
  readIsList: false
});

export default function* finPlanScheduleWathcer() {
  yield takeEvery(
    FIN_PLAN_SCHEDULE_ACTION_TYPES.REQUEST,
    getFinPlanScheduleWorker
  );
}
