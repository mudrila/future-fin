import { takeEvery, put } from "redux-saga/effects";

import api from "../../../api";
import {
  USER_ACTION_TYPES,
  LOGIN_ACTION_TYPES,
  LOGOUT_ACTION_TYPES,
  userActionCreators,
  loginActionCreators
} from "./actions";
import { signUpRequest, loginRequest, logoutRequest } from "./requests";

function* signUpWorker({ payload }) {
  const loadingAction = userActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield signUpRequest(payload);
    const successAction = userActionCreators.CREATE.SUCCESS(result);
    yield put(successAction);
  } catch (e) {
    const errorAction = userActionCreators.CREATE.ERROR();
    yield put(errorAction);
  }
}

function* loginWorker({ payload }) {
  const loadingAction = loginActionCreators.LOADING();
  yield put(loadingAction);
  try {
    const result = yield loginRequest(payload);
    api.defaults.headers.Authorization = `Bearer ${result.token}`;
    const successAction = loginActionCreators.SUCCESS(result);
    yield put(successAction);
  } catch (e) {
    const errorAction = loginActionCreators.ERROR();
    yield put(errorAction);
  }
}

function* logoutWorker() {
  try {
    // Doesn't really matter is the request successfull or not
    yield logoutRequest();
  } catch (e) {
    console.error(e);
  }
  api.defaults.headers.Authorization = "";
  localStorage.removeItem("persist:appState");
}

export default function* userWatcher() {
  yield takeEvery(USER_ACTION_TYPES.CREATE.REQUEST, signUpWorker);
  yield takeEvery(LOGIN_ACTION_TYPES.REQUEST, loginWorker);
  yield takeEvery(LOGOUT_ACTION_TYPES.REQUEST, logoutWorker);
}
