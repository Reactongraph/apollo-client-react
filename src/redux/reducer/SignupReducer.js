export default function reducer(state = {}, action) {
  switch (action.type) {
    case "SIGNUP_INITATED": {
      return { ...state, status: "uninitiated" };
    }
    case "SIGNUP_STARTED": {
      return { ...state, status: "ongoing" };
    }
    case "SIGNUP_SUCCESS": {
      return { ...state, ...action.payload, status: "success" };
    }
    case "SIGNUP_FAILED": {
      return { ...state, ...action.payload, status: "failed" };
    }
    default: {
      return state;
    }
  }
}
