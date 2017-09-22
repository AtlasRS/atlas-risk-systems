import { GET_ENTITY, GET_ENTITIES, POST_ENTITY, LOGOUT_ENTITIES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ENTITY:
      return { ...state, entity: action.payload }
    case GET_ENTITIES:
      return { ...state, entities: action.payload }
    case POST_ENTITY:
      return { ...state, entities: action.payload }
    case LOGOUT_ENTITIES:
      return { ...state, entities: null }
    default:
      return state;
  }
}
