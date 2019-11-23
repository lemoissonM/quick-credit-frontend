import axios from 'axios';
import constant from '../constants/index';

export const signup = (userData) => {
  return (dispatch) => {
    dispatch({
      type: constant.SIGNUP_PENDING,
      pending: true
    });
    console.log(userData);
    return axios.post('https://quic-credit-andela.herokuapp.com/api/v1/auth/signup', userData).then(result => {
      console.log(result.data);
      return dispatch({
        user: result.data.data,
        type: constant.SIGNUP_SUCCESSFUL
      });
    }).catch(err => {
      console.log(err);
      return dispatch({
        error: err.response.data,
        type: constant.SIGNUP_ERROR
      });
    });
  };
};
