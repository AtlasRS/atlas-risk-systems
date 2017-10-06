import { GET_ASSETS, POST_ASSET, PURGE_ASSETS, DELETE_ASSET } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ASSETS:
      const assets = action.payload.reduce((arr, assetArr) => {
        assetArr.forEach(asset => {
          arr.push(asset);
        });
        return arr;
      }, []);
      return { ...state, assets: assets }
    case POST_ASSET:
      const assetsCopy = [...state.assets, action.payload]
      return { ...state, assets: assetsCopy }
    case DELETE_ASSET:
      const filteredAssets = state.assets.filter(asset => {
        if (asset._id !== action.payload) {
          return asset;
        }
      });
      return { ...state, assets: filteredAssets }
    case PURGE_ASSETS:
      return { assets: {} }
    default:
      return state;
  }
}
