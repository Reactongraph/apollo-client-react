import { put, takeEvery } from "redux-saga/effects";
import Query from "../Query";
import User from "../Query/User";

const user = new User();

export const LOGIN = function* perform_checks() {
  yield takeEvery("LOGIN", function*(action) {
    yield put({ type: "LOGIN_STARTED" });
    try {
      const DATA = yield Query(user.user(), action.payload);
      yield put({ type: "LOGIN_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "LOGIN_FAILED", payload: error });
    }
  });
};
