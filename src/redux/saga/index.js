import { all } from "redux-saga/effects";
import { LOGIN } from "./LoginSaga";

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([LOGIN()]);
};
export default rootSaga;
