import axios from 'axios';
import constant from '../constants/index';

export const login = (userData) => {
  return (dispatch) => {
    dispatch({
      type: constant.LOGIN_PENDING,
      pending: true
    });
    console.log(userData);
    return axios.post('https://quic-credit-andela.herokuapp.com/api/v1/auth/signin', userData).then(result => {
      console.log(result.data);
      return dispatch({
        user: result.data.data,
        type: constant.LOGIN_SUCCESSFUL
      });
    }).catch(err => {
      console.log(err);
      return dispatch({

        error: err.response.data,
        type: constant.LOGIN_ERROR
      });
    });
  };
};
