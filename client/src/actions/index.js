import axios from 'axios';
import { GET_USER, AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

export const getUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: GET_USER, payload: res.data });
};

export const signupUser = ({ first_name, last_name, email, password }, history) => dispatch => {
  axios.post('/api/signup', { first_name, last_name, email, password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: AUTH_USER, payload: res.data });
      history.push('/assets');
    })
    .catch(() => {
      dispatch
    })
}

export const loginUser = ({ email, password }, history) => dispatch => {
  axios.post('/api/login', { email, password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: AUTH_USER, payload: res.data });
      history.push('/assets');
    })
    .catch(() => {
      dispatch(authError('Invalid email or password'));
    })
};

export const authError = error => {
  return {type: AUTH_ERROR, payload: error };
}

export const logoutUser = () => {
  console.log('LOGGING OUT USER');
  localStorage.removeItem('token');
  return { type: UNAUTH_USER }
}
