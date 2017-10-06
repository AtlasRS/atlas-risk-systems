import {
  GET_ENTITY,
  GET_ENTITIES,
  POST_ENTITY,
  PURGE_ENTITIES,
  DISPLAY_ENTITY_ASSETS,
  CLEAR_CURRENT_ENTITY,
  ADD_NEW_ASSET,
  DELETE_ENTITY
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ENTITY:
      return { ...state, entity: action.payload }
    case GET_ENTITIES:
      const entitiesID = action.payload.map(entity => {
        return {
          name: entity.legal_name,
          id: entity._id
        }
      });
      return { ...state, entities: action.payload, entitiesID: entitiesID }
    case POST_ENTITY:
    const entitiesCopy = [...state.entities, action.payload]
      return { ...state, entities: entitiesCopy }
    case DELETE_ENTITY:
      const filteredEntities = state.entities.filter(entity => {
        if (entity._id !== action.payload) {
          return entity;
        }
      });
      return { ...state, entities: filteredEntities }
    case ADD_NEW_ASSET:
      const newAsset = [...state.entity_assets, action.payload]
      return { ...state, entity_assets: newAsset }
    case DISPLAY_ENTITY_ASSETS:
      const id = action.payload.entity_id;
      const assets = action.payload.assets;
      const entity_name = action.payload.entity_name;
      const entityAssets = assets.filter(asset => {
        if (asset._entity === id) return asset;
      });
      return { ...state, entity_assets: entityAssets, current_entity: { entity_name, id }, myAssets: false }
    case CLEAR_CURRENT_ENTITY:
      return { ...state, current_entity: { entity_name: undefined , id: undefined }, myAssets: true }
    case PURGE_ENTITIES:
      return { entities: {} }
    default:
      return state;
  }
}
