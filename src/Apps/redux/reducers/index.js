import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import signupReducer from './signup.reducer';

export default combineReducers({
  login: loginReducer,
  signup: signupReducer
});
