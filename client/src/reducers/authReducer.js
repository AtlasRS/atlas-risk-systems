import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case "persist/REHYDRATE":
      return { ...state, authenticated: action.payload.auth.authenticated, user: action.payload.auth.user }
    case AUTH_USER:
      return { ...state, authenticated: true, user: action.payload }
    case UNAUTH_USER:
      return { ...state, authenticated: false, user: {} };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
