import axios from 'axios';
import { GET_ENTITY, GET_ENTITIES, POST_ENTITY } from './types';

const token = localStorage.token;
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
      dispatch({ type: GET_ENTITIES, payload: res.data });
      history.push(`entity/${id}`);
    })
    .catch(err => {
      console.error('not happening');
    })
};

export const postEntity = (values, id, history) => dispatch => {
  values._user = id;
  console.log('IS IT ON THERE', values);
  const data = JSON.stringify(values);
  axios.post('/api/entity', data)
    .then(res => {
      dispatch({ type: POST_ENTITY, payload: res.data });
      history.push('/entities');
    })
    .catch(err => {
      console.error('not happening');
    })
};
