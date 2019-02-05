export default function reducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN_INITATED": {
      return { ...state, status: "uninitiated" };
    }
    case "LOGIN_STARTED": {
      return { ...state, status: "ongoing" };
    }
    case "LOGIN_SUCCESS": {
      return { ...state, ...action.payload, status: "success" };
    }
    case "LOGIN_FAILED": {
      return { ...state, ...action.payload, status: "failed" };
    }
    default: {
      return state;
    }
  }
}
