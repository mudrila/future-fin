import { takeLatest, put } from "redux-saga/effects";
import { CRUD_KEYS } from "../../config";

export function createCRUDSagaWatcher({
  actionTypes,
  actionCreatorsFacade,
  requestsHandlersFacade
}) {
  return function* CRUDSagaWatcher() {
    // Create set of CRUD workers
    let workersFacade = {};
    CRUD_KEYS.forEach((crudKey) => {
      const worker = createBasicRequestWorker({
        actionCreatorsFacade: actionCreatorsFacade[crudKey],
        requestHandler: requestsHandlersFacade[crudKey],
        crudKey
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
  crudKey
}) {
  return function* worker({ payload, enqueueSnackbar, t }) {
    const loadingAction = actionCreatorsFacade.LOADING();
    yield put(loadingAction);
    try {
      let additionalRequestConfig = {};
      if (crudKey === CRUD_KEYS.READ) {
        additionalRequestConfig.path = "list";
      } else {
        additionalRequestConfig.path = payload._id;
      }
      const data = yield requestHandler(payload, additionalRequestConfig);
      let successAction = actionCreatorsFacade.SUCCESS(data);
      if (crudKey === CRUD_KEYS.DELETE) {
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
      enqueueSnackbar(t(errorMessage), { variant: "error" });
    }
  };
}
