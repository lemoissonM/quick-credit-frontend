import constants from '../constants/index';
const initialState = {
  user: null,
  pending: false,
  error: null
};

const loginreducer = (state = initialState, action) => {
  switch (action.type) {
  case constants.LOGIN_SUCCESSFUL:
    return Object.assign({}, state, {
      ...state,
      user: action.user,
      pending: false
    });
  case constants.LOGIN_ERROR:
    return Object.assign({}, state, {
      ...state,
      pending: false,
      error: action.error
    });
  case constants.LOGIN_PENDING:
    return Object.assign({}, state, {
      ...state,
      pending: true
    });
  default :
    return state;
  }
};

export default loginreducer;
