import axios from 'axios';
import { POST_ASSET } from './types';

const token = localStorage.getItem('token');

export const postAsset = (values, entityID, history) => dispatch => {
  axios.post('/api/asset', values, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: POST_ASSET, payload: res.data });
      history.push(`/entity/assets/:${entityID}`);
    })
    .catch(err => {
      console.error('not happening', err);
    })
};
