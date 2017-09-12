import { GET_USER, AUTH_LOCAL } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload || false;
    case AUTH_LOCAL:
      return action.payload || false;
    default:
      return state;
  }
}
