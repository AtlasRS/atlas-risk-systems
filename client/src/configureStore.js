import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';
import reducers from './reducers';

const configureStore = () =>  {
  const persistedState = loadState();
  const store = createStore(reducers, persistedState, applyMiddleware(reduxThunk, logger));

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
}

export default configureStore;
