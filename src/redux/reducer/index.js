import { combineReducers } from 'redux'
import login from './LoginReducer'
import signup from './SignupReducer'

// Wrap all reducers in a container
export default combineReducers({
  signup,
  login,
});
