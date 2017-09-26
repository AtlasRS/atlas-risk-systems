import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const store = compose(applyMiddleware(reduxThunk, logger), autoRehydrate())(createStore)(reducers);

export default store;
