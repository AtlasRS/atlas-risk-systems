import { GET_USER, AUTH_USER, UNAUTH_USER, AUTH_ERROR} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload || false;
    case AUTH_USER:
      return action.payload || false;
    case UNAUTH_USER:
      return action.payload || false;
    case AUTH_ERROR:
      return action.payload || false;
    default:
      return state;
  }
}
