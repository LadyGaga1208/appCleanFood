import { combineReducers } from 'redux';

import userReducer from './userReducer';
import bannerReducer from './bannerReducer';
import newProductReducer from './newProductReducer';
import cataloguesReducer from './cataloguesReducer';
import suggestReducer from './suggestReducer';

export default combineReducers({
  userReducer,
  bannerReducer,
  newProductReducer,
  cataloguesReducer,
  suggestReducer
});
