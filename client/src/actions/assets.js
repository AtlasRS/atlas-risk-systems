import axios from 'axios';
import { GET_ASSETS } from './types';

const token = localStorage.getItem('token');

export const postAsset = (values, history) => dispatch => {
  axios.post('/api/asset', values, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: GET_ASSETS, payload: res.data });
      history.push('/assets');
    })
    .catch(err => {
      console.error('Erro posting new Asset');
    })
}
