import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, CONFIRM_ACCOUNT } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, user: action.payload }
    case UNAUTH_USER:
      return { authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case CONFIRM_ACCOUNT:
      return { ...state, confirm: false, msg: action.payload }
    default:
      return state;
  }
}
