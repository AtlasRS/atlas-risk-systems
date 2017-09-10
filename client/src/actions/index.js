import axios from 'axios';
import { GET_USER } from './types';

export const FETCH_ASSETS = "fetch_assets";
export const FETCH_ASSET = "fetch_asset";
export const CREATE_ASSET = "create_asset";
export const DELETE_ASSET = "delete_asset";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export const getUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: GET_USER, payload: res.data });
};

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_ASSETS,
    payload: request
  };
}

export function createAsset(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_ASSET,
    payload: request
  };
}

export function fetchAsset(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}

export function deleteAsset(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_ASSET,
    payload: id
  };
}
