import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, NOT_CONFIRM, IS_CONFIRM } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, user: action.payload }
    case UNAUTH_USER:
      return { authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case NOT_CONFIRM:
      return { ...state, confirm: false, msg: action.payload }
    case IS_CONFIRM:
      return { ...state, confirm: true }
    default:
      return state;
  }
}
