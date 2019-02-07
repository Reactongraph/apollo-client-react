import { combineReducers } from "redux";
import login from "./LoginReducer";
import signup from "./SignupReducer";

// Wrap all reducers in a container
const rootReducer = combineReducers({
  signup,
  login
});

export default (state, action) => {
  if (action.type === "LOGOUT") {
    return {};
  }
  return rootReducer(state, action);
};
