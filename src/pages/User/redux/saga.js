import { takeEvery, put } from "redux-saga/effects";
import Cookies from "js-cookie";
import Router from "next/router";

import api from "../../../api";
import { appSettingsActionCreators } from "../../Settings/redux/actions";
import {
  USER_ACTION_TYPES,
  LOGIN_ACTION_TYPES,
  LOGOUT_ACTION_TYPES,
  userActionCreators,
  loginActionCreators,
  logoutActionCreators
} from "./actions";
import { loginRequest, logoutRequest, userCRUDRequests } from "./requests";

function* signUpWorker({ payload, enqueueSnackbar }) {
  const loadingAction = userActionCreators.CREATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield userCRUDRequests.CREATE(payload, {
      url: "/public/sign-up"
    });
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

function* getUserAccountWorker({ enqueueSnackbar }) {
  const loadingAction = userActionCreators.READ.LOADING();
  yield put(loadingAction);
  try {
    const result = yield userCRUDRequests.READ();
    const successAction = userActionCreators.READ.SUCCESS(result.user);
    yield put(successAction);
  } catch (e) {
    let message;
    if (
      (e.response.status === 400 || e.response.status === 406) &&
      e.response.data
    ) {
      message = e.response.data.error;
    }
    enqueueSnackbar(message, { variant: "error" });
    const errorAction = userActionCreators.READ.ERROR();
    yield put(errorAction);
  }
}

function* updateUserAccountWorker({ payload, enqueueSnackbar }) {
  const loadingAction = userActionCreators.UPDATE.LOADING();
  yield put(loadingAction);
  try {
    const result = yield userCRUDRequests.UPDATE(payload);
    const successAction = userActionCreators.UPDATE.SUCCESS(result.user);
    yield put(successAction);
  } catch (e) {
    let message;
    if (
      e.response &&
      (e.response.status === 400 || e.response.status === 406) &&
      e.response.data
    ) {
      message = e.response.data.error;
    } else {
      message = e.message;
    }
    enqueueSnackbar(message, { variant: "error" });
    const errorAction = userActionCreators.UPDATE.ERROR();
    yield put(errorAction);
  }
}

function* deleteUserAccountWorker() {
  const loadingAction = userActionCreators.DELETE.LOADING();
  yield put(loadingAction);
  try {
    yield userCRUDRequests.DELETE();
    const successAction = userActionCreators.DELETE.SUCCESS();
    yield put(successAction);
  } catch (e) {
    enqueueSnackbar(e.message, { variant: "error" });
    const errorAction = userActionCreators.UPDATE.ERROR();
    yield put(errorAction);
  }
}

function* loginWorker({ payload, enqueueSnackbar }) {
  const loadingAction = loginActionCreators.LOADING();
  yield put(loadingAction);
  try {
    const { token } = yield loginRequest(payload);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    Cookies.set("token", token);
    localStorage.setItem("accessToken", token);
    const successAction = loginActionCreators.SUCCESS({
      token
    });
    yield put(successAction);
    Router.push("/");
    const getAppSettingsAction = appSettingsActionCreators.READ.REQUEST();
    yield put(getAppSettingsAction);
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
  Cookies.remove("token");
  yield put(logoutSuccessAction);
  api.defaults.headers.Authorization = "";
  localStorage.removeItem("persist:appState");
  enqueueSnackbar("Successfully logged out. See ya ;)", { variant: "success" });
  Router.push("/login");
}

export default function* userWatcher() {
  yield takeEvery(USER_ACTION_TYPES.READ.REQUEST, getUserAccountWorker);
  yield takeEvery(USER_ACTION_TYPES.CREATE.REQUEST, signUpWorker);
  yield takeEvery(USER_ACTION_TYPES.UPDATE.REQUEST, updateUserAccountWorker);
  yield takeEvery(USER_ACTION_TYPES.DELETE.REQUEST, deleteUserAccountWorker);
  yield takeEvery(LOGIN_ACTION_TYPES.REQUEST, loginWorker);
  yield takeEvery(LOGOUT_ACTION_TYPES.REQUEST, logoutWorker);
}
