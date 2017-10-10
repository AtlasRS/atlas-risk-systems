import { ENTITY_MODAL, ASSET_MODAL, REMOVE_MODAL } from '../actions/types';

export default function(state = { modal_display: false }, action) {
  switch (action.type) {
    case ENTITY_MODAL:
      return { modal_display: true, entity: action.payload }
    case ASSET_MODAL:
      return { modal_display: true, asset: action.payload }
    case REMOVE_MODAL:
      return { modal_display: false }
    default:
      return state;
  }
}
