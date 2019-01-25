import { all } from 'redux-saga/effects'
import { LOGIN } from './LoginSaga'
import { SIGNUP } from './SignupSaga'

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([
    LOGIN(),
    SIGNUP(),
  ])
}
export default rootSaga
