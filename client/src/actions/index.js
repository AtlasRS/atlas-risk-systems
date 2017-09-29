import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  GET_ENTITIES,
  GET_ASSETS,
  PURGE_ASSETS,
  PURGE_ENTITIES,
  NOT_CONFIRM,
  IS_CONFIRM
} from './types';

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
      dispatch({ type: NOT_CONFIRM, payload: res.data.msg });
      history.push('/confirm/account');
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
      dispatch({ type: GET_ASSETS, payload: res.data.assets });
      dispatch({ type: IS_CONFIRM });
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
      dispatch({ type: PURGE_ASSETS });
      dispatch({ type: PURGE_ENTITIES });
      localStorage.removeItem('token');
      history.push('/');
    })
    .catch(err => {
      console.error('not happening');
    })
};
