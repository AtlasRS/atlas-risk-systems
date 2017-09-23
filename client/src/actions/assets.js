import axios from 'axios';
import { POST_ASSET } from './types';

const token = localStorage.getItem('token');

export const postAsset = (values, history) => dispatch => {
  axios.post('/api/asset', values, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: POST_ASSET, payload: res.data });
      history.push('/assets');
    })
    .catch(err => {
      console.error('Erro posting new Asset');
    })
}
