import { all } from "redux-saga/effects";

import budgetSagaWatcher from "./budget";

export default function* rootSaga() {
  yield all([budgetSagaWatcher()]);
}
