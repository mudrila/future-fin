import { takeEvery, all } from "redux-saga/effects";

import { finPlanGoalsRequests, getFinPlanHealth } from "./requests";

import {
  createCRUDSagaWatcher,
  createBasicRequestWorker
} from "../../../../store/utils/sagaUtils";

import {
  FIN_PLAN_GOALS_ACTION_TYPES,
  FIN_HEALTH_ACTION_TYPES,
  finHealthActionCreators,
  finPlanGoalsActionCreators
} from "./actions";

const _finPlanWatcher = createCRUDSagaWatcher({
  actionTypes: FIN_PLAN_GOALS_ACTION_TYPES,
  actionCreatorsFacade: finPlanGoalsActionCreators,
  requestsHandlersFacade: finPlanGoalsRequests,
  readIsList: true
});

const getFinHealthDataWorker = createBasicRequestWorker({
  actionCreatorsFacade: finHealthActionCreators,
  requestHandler: getFinPlanHealth,
  crudKey: "READ",
  readIsList: false
});

export default function* finPlanWatcher() {
  yield takeEvery(FIN_HEALTH_ACTION_TYPES.REQUEST, getFinHealthDataWorker);
  yield all([_finPlanWatcher()]);
}
