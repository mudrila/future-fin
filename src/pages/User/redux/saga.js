import { takeEvery, put } from "redux-saga/effects";
import Router from "next/router";

import api from "../../../api";
import {
  USER_ACTION_TYPES,
  LOGIN_ACTION_TYPES,
  LOGOUT_ACTION_TYPES,
  userActionCreators,
  loginActionCreators,
  logoutActionCreators
} from "./actions";
import { signUpRequest, loginRequest, logoutRequest } from "./requests";

function* signUpWorker({ payload, enqueueSnackbar }) {
  const loadingAction = userActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield signUpRequest(payload);
    enqueueSnackbar("Success! You're registered!", { variant: "success" });
    const successAction = userActionCreators.CREATE.SUCCESS(result);
    yield put(successAction);
    const loginRequestAction = loginActionCreators.REQUEST(
      {
        email: payload.email,
        password: payload.password
      },
      enqueueSnackbar
    );
    yield put(loginRequestAction);
  } catch (e) {
    let message;
    if (
      (e.response.status === 400 || e.response.status === 406) &&
      e.response.data
    ) {
      message = e.response.data.error;
    }
    enqueueSnackbar(message, { variant: "error" });
    const errorAction = userActionCreators.CREATE.ERROR();
    yield put(errorAction);
  }
}

function* loginWorker({ payload, enqueueSnackbar }) {
  const loadingAction = loginActionCreators.LOADING();
  yield put(loadingAction);
  try {
    const result = yield loginRequest(payload);
    api.defaults.headers.Authorization = `Bearer ${result.token}`;
    const successAction = loginActionCreators.SUCCESS({
      ...result.user,
      token: result.token
    });
    yield put(successAction);
  } catch (e) {
    let message;
    if (e.response.status === 400 && e.response.data) {
      message = e.response.data.error;
    }
    enqueueSnackbar(message, { variant: "error" });
    const errorAction = loginActionCreators.ERROR();
    yield put(errorAction);
  }
}

function* logoutWorker({ enqueueSnackbar }) {
  try {
    // Doesn't really matter is the request successfull or not
    yield logoutRequest();
  } catch (e) {
    console.error(e);
  }
  const logoutSuccessAction = logoutActionCreators.SUCCESS();
  yield put(logoutSuccessAction);
  api.defaults.headers.Authorization = "";
  localStorage.removeItem("persist:appState");
  enqueueSnackbar("Successfully logged out. See ya ;)", { variant: "success" });
  Router.push("/login");
}

export default function* userWatcher() {
  yield takeEvery(USER_ACTION_TYPES.CREATE.REQUEST, signUpWorker);
  yield takeEvery(LOGIN_ACTION_TYPES.REQUEST, loginWorker);
  yield takeEvery(LOGOUT_ACTION_TYPES.REQUEST, logoutWorker);
}
