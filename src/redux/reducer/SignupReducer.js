
export default function reducer(state = {
  auth: '',
}, action) {
  switch (action.type) {
    case 'SIGNUP_INITATED': {
      return { ...state, changingStatus: 'uninitiated' }
    }
    case 'SIGNUP_STARTED': {
      return { ...state, changingStatus: 'ongoing' }
    }
    case 'SIGNUP_SUCCESS': {
      return { ...state, changingStatus: 'success', auth: action.payload }
    }
    case 'SIGNUP_FAILED': {
      return { ...state, changingStatus: 'failed', error: action.payload }
    }
    default: {
      return state;
    }
  }
}
