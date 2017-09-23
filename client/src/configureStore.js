import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
// import { loadState, saveState } from './utils/localStorage';
// import throttle from 'lodash/throttle';
import reducers from './reducers';


const store = compose(applyMiddleware(reduxThunk, logger), autoRehydrate())(createStore)(reducers);

persistStore(store);

export default store;
