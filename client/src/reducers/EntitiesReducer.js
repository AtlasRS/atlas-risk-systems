import { GET_ENTITY, GET_ENTITIES, POST_ENTITY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case "persist/REHYDRATE":
      return { ...state, entities: action.payload.entities.entities }
    case GET_ENTITY:
      return { ...state, entity: action.payload }
    case GET_ENTITIES:
      return { ...state, entities: action.payload }
    case POST_ENTITY:
      return { ...state, entities: action.payload }
    default:
      return state;
  }
}
