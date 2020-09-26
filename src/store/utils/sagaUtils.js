import { takeLatest, put } from "redux-saga/effects";
import { CRUD_KEYS } from "../../config";

import { i18n } from "../../i18n";

export function createCRUDSagaWatcher({
  actionTypes,
  actionCreatorsFacade,
  requestsHandlersFacade,
  readIsList
}) {
  return function* CRUDSagaWatcher() {
    // Create set of CRUD workers
    let workersFacade = {};
    CRUD_KEYS.forEach((crudKey) => {
      const worker = createBasicRequestWorker({
        actionCreatorsFacade: actionCreatorsFacade[crudKey],
        requestHandler: requestsHandlersFacade[crudKey],
        crudKey,
        readIsList
      });
      workersFacade[crudKey] = worker;
    });

    // Assign workers to listen for appropriate action types
    yield takeLatest(actionTypes.READ.REQUEST, workersFacade.READ);
    yield takeLatest(actionTypes.CREATE.REQUEST, workersFacade.CREATE);
    yield takeLatest(actionTypes.UPDATE.REQUEST, workersFacade.UPDATE);
    yield takeLatest(actionTypes.DELETE.REQUEST, workersFacade.DELETE);
  };
}

export function createBasicRequestWorker({
  actionCreatorsFacade,
  requestHandler,
  crudKey,
  readIsList
}) {
  return function* worker({ payload, enqueueSnackbar }) {
    const loadingAction = actionCreatorsFacade.LOADING();
    yield put(loadingAction);
    try {
      let additionalRequestConfig = {};
      if (crudKey === "READ" && readIsList) {
        additionalRequestConfig.path = "list";
      } else if (payload && payload._id) {
        additionalRequestConfig.path = payload._id;
      }
      const data = yield requestHandler(payload, additionalRequestConfig);
      let successAction = actionCreatorsFacade.SUCCESS(data);
      if (crudKey === "DELETE") {
        successAction = actionCreatorsFacade.SUCCESS(payload);
      }
      yield put(successAction);
    } catch (e) {
      const errorAction = actionCreatorsFacade.ERROR();
      yield put(errorAction);
      let errorMessage = e.message;
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }
      enqueueSnackbar(i18n.t(errorMessage), { variant: "error" });
    }
  };
}
