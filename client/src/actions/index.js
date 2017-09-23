import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, GET_ENTITIES } from './types';

export const socialAuth = (provider, history) => dispatch => {
  window.open(`/auth/${provider}`);
  dispatch({ type: AUTH_USER });
  // history.push('/assets');
};

// Get user if token exists
export const getUser = () => dispatch => {
  axios.get('/api/user', { 'headers': { 'authorization': localStorage.token } })
    .then(res => {
      dispatch({ type: AUTH_USER, payload: res.data });
      dispatch({ type: GET_ENTITIES, payload: res.data.entities });
    })
    .catch(err => {
      dispatch(authError(err));
    })
}

export const signupUser = ({ first_name, last_name, email, password }, history) => dispatch => {
  axios.post('/api/signup', { first_name, last_name, email, password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: AUTH_USER, payload: res.data });
      history.push('/entities');
    })
    .catch(err => {
      dispatch(authError(err));
    })
}

export const loginUser = ({ email, password }, history) => dispatch => {
  axios.post('/api/login', { email, password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: AUTH_USER, payload: res.data.user });
      dispatch({ type: GET_ENTITIES, payload: res.data.entities });
      history.push('/entities');
    })
    .catch(() => {
      dispatch(authError('Invalid email or password'));
    });
};

export const authError = error => {
  return {type: AUTH_ERROR, payload: error };
}

export const logoutUser = (history) => dispatch => {
  axios.get('/api/logout')
    .then(res => {
      dispatch({ type: UNAUTH_USER });
      localStorage.removeItem('token');
      history.push('/');
    })
    .catch(err => {
      console.error('not happening');
    })
};
