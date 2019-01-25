import { put, takeEvery } from 'redux-saga/effects'

export const SIGNUP = function* perform_checks() {
  yield takeEvery('SIGNUP', function* (action) {
    yield put({ type: 'SIGNUP_STARTED' })
    try {
      const DATA = action.payload//yield authObj.signup(action.payload)
      yield put({ type: 'SIGNUP_SUCCESS', payload: DATA })
    } catch (error) {
      yield put({ type: 'SIGNUP_FAILED', payload: error })
    }
  })
}
