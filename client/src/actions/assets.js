import axios from 'axios';
import { POST_ASSET, ADD_NEW_ASSET, DELETE_ASSET, REMOVE_MODAL } from './types';

const token = localStorage.getItem('token');

export const postAsset = (values, entityID, onEntity, history) => dispatch => {
  axios.post('/api/asset', values, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: POST_ASSET, payload: res.data });
      dispatch({ type: ADD_NEW_ASSET, payload: res.data })
      if (onEntity === false) history.push('/assets');
      else history.push(`/entity/assets/:${entityID}`);
    })
    .catch(err => {
      console.error('not happening', err);
    })
};

export const deleteAsset = (asset_id, history) => dispatch => {
  axios.delete(`/api/asset/${asset_id}`, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: DELETE_ASSET, payload: asset_id });
      history.push('/assets');
    })
    .catch(err => {
      console.error('Did not delete asset', err);
    })
}

export const updateAsset = () => dispatch => {
  dispatch({ type: REMOVE_MODAL });
}
