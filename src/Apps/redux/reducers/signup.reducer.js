import constants from '../constants/index';
const initialState = {
  user: null,
  pending: false,
  error: null
};

const loginreducer = (state = initialState, action) => {
  switch (action.type) {
  case constants.SIGNUP_SUCCESSFUL:
    return Object.assign({}, state, {
      ...state,
      user: action.user,
      pending: false,
      error: null
    });
  case constants.SIGNUP_ERROR:
    return Object.assign({}, state, {
      ...state,
      pending: false,
      error: action.error,
      user: null
    });
  case constants.SIGNUP_PENDING:
    return Object.assign({}, state, {
      ...state,
      pending: true,
      error: null,
      user: null
    });
  default :
    return state;
  }
};

export default loginreducer;
