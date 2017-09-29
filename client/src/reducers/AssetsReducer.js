import { GET_ASSETS, PURGE_ASSETS } from '../actions/types';

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
    case PURGE_ASSETS:
      return { assets: {} }
    default:
      return state;
  }
}
