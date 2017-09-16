import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

export const authUser = () => dispatch => {
  axios.get('/api/current_user')
    .then(res => {
      if (res.data) dispatch({ type: AUTH_USER, payload: res.data });
      else dispatch({ type: UNAUTH_USER, payload: res.data });
    })
    .catch(err => {
      console.log('There is an error: ', err);
    })
};

export const signupUser = ({ first_name, last_name, email, password }, history) => dispatch => {
  axios.post('/api/signup', { first_name, last_name, email, password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: AUTH_USER, payload: res.data });
      history.push('/assets');
    })
    .catch(err => {
      dispatch(authError(err));
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

export const logoutUser = (history) => dispatch => {
  axios.get('/api/logout')
    .then(res => {
      localStorage.removeItem('token');
      dispatch({ type: UNAUTH_USER, payload: null });
      history.push('/');
    })
    .catch(err => {
      console.error('not happening');
    })
};
