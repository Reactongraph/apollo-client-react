import { put, takeEvery } from 'redux-saga/effects'

export const LOGIN = function* perform_checks() {
  yield takeEvery('LOGIN', function* (action) {
    yield put({ type: 'LOGIN_STARTED' })
    try {
      const { email, password } = action.payload
      const DATA = { email, password }//yield authObj.login(email, password)
      yield put({ type: 'LOGIN_SUCCESS', payload: DATA })
    } catch (error) {
      yield put({ type: 'LOGIN_FAILED', payload: error })
    }
  })
}
