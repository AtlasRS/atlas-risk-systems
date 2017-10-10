import { ENTITY_MODAL, ASSET_MODAL } from './types';

export const entityModal = entity => dispatch => {
  dispatch({ type: ENTITY_MODAL, payload: entity });
}

// export const assetModal = asset => dispatch => {
//   dispatch({ type: ASSET_MODAL, payload: asset });
// }
