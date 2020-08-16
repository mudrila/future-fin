import { all } from "redux-saga/effects";

import budgetSagaWatcher from "../pages/Apps/Budget/redux/saga";

export default function* rootSaga() {
  yield all([budgetSagaWatcher()]);
}
