import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import AssetsReducer from './AssetsReducer';
import EntitiesReducer from './EntitiesReducer';
import ModalReducer from './ModalReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  assets: AssetsReducer,
  entities: EntitiesReducer,
  modal: ModalReducer
});

export default rootReducer;
