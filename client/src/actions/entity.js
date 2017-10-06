import axios from 'axios';
import { GET_ENTITY, GET_ENTITIES, POST_ENTITY, DISPLAY_ENTITY_ASSETS, CLEAR_CURRENT_ENTITY, DELETE_ENTITY } from './types';

const token = localStorage.getItem('token');
// Gets one entity
export const getEntity = (id, history) => dispatch => {
  axios.get('/api/entity/id', { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: GET_ENTITY, payload: res.data });
      history.push(`entity/${id}`);
    })
    .catch(err => {
      console.error('not happening');
    })
};

// Gets all entities per/user
export const getEntities = (id, history) => dispatch => {
  axios.get(`/api/entities/${id}`, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: GET_ENTITIES, payload: res.data.entities });
      history.push(`entity/${id}`);
    })
    .catch(err => {
      console.error('not happening');
    })
};

export const postEntity = (values, id, history) => dispatch => {
  values._user = id;
  axios.post('/api/entity', values, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: POST_ENTITY, payload: res.data });
      history.push('/entities');
    })
    .catch(err => {
      console.error('not happening', err);
    })
};

export const deleteEntity = (entity_id, history) => dispatch => {
  axios.delete(`/api/entity/${entity_id}`, { 'headers': { 'authorization': token } })
    .then(res => {
      dispatch({ type: DELETE_ENTITY, payload: entity_id });
      history.push('/entities');
    })
    .catch(err => {
      console.error('Did not delete entity', err);
    })
}

export const displayEntityAssets = (entity_id, entity_name, assets, history) => dispatch => {
  dispatch({ type: DISPLAY_ENTITY_ASSETS, payload: { entity_id, entity_name, assets } });
  history.push(`/entity/assets/:${entity_id}`);
}

export const clearEntity = (history) => dispatch => {
  dispatch({ type: CLEAR_CURRENT_ENTITY });
  history.push('/assets');
}
