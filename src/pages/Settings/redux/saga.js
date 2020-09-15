import { takeEvery, put } from "redux-saga/effects";

import {
  APP_SETTINGS_ACTION_TYPES,
  appSettingsActionCreators
} from "./actions";
import { appSettingsRequests } from "./requests";

function* getAppSettingsWorker({ enquequeSnackbar }) {
  const loadingAction = appSettingsActionCreators.READ.LOADING();
  yield put(loadingAction);
  try {
    const result = yield appSettingsRequests.READ();
    const successAction = appSettingsActionCreators.READ.SUCCESS(
      result.settings
    );
    yield put(successAction);
  } catch (e) {
    const errorAction = appSettingsActionCreators.READ.ERROR();
    enquequeSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* updateAppSettingsWorker({ payload, enquequeSnackbar }) {
  const loadingAction = appSettingsActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield appSettingsRequests.UPDATE(payload);
    const successAction = appSettingsActionCreators.UPDATE.SUCCESS(
      result.settings
    );
    yield put(successAction);
  } catch (e) {
    const errorAction = appSettingsActionCreators.UPDATE.ERROR();
    enquequeSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

export default function* appSettingsWatcher() {
  yield takeEvery(APP_SETTINGS_ACTION_TYPES.READ.REQUEST, getAppSettingsWorker);
  yield takeEvery(
    APP_SETTINGS_ACTION_TYPES.UPDATE.REQUEST,
    updateAppSettingsWorker
  );
}
