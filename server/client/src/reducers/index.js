import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import AssetsReducer from './AssetsReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
});

export default rootReducer;
