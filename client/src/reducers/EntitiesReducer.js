import { GET_ENTITY, GET_ENTITIES, POST_ENTITY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ENTITY:
      return { ...state, entity: action.payload || false };
    case GET_ENTITIES:
      return { ...state, entities: action.payload || false };
    case POST_ENTITY:
      return { ...state, entity: action.payload || false };
    default:
      return state;
  }
}
