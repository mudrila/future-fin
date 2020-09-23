import { takeEvery, put } from "redux-saga/effects";

import {
  APP_SETTINGS_ACTION_TYPES,
  appSettingsActionCreators
} from "./actions";
import { appSettingsRequests } from "./requests";
import { i18n } from "../../../i18n";

function* getAppSettingsWorker({ enqueueSnackbar }) {
  const loadingAction = appSettingsActionCreators.READ.LOADING();
  yield put(loadingAction);
  try {
    const result = yield appSettingsRequests.READ();
    const successAction = appSettingsActionCreators.READ.SUCCESS(
      result.appSettings
    );
    yield put(successAction);
    i18n.changeLanguage(result.appSettings.defaultLanguage);
  } catch (e) {
    const errorAction = appSettingsActionCreators.READ.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
    yield put(errorAction);
  }
}

function* updateAppSettingsWorker({ payload, enqueueSnackbar }) {
  const loadingAction = appSettingsActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield appSettingsRequests.UPDATE(payload);
    const successAction = appSettingsActionCreators.UPDATE.SUCCESS(
      result.appSettings
    );
    yield put(successAction);
    i18n.changeLanguage(result.appSettings.defaultLanguage);
  } catch (e) {
    const errorAction = appSettingsActionCreators.UPDATE.ERROR();
    enqueueSnackbar(e.message, { variant: "error" });
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
