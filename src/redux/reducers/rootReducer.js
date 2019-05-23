import { combineReducers } from 'redux';

import userReducer from './userReducer';
import bannerReducer from './bannerReducer';
import newProductReducer from './newProductReducer';

export default combineReducers({
  userReducer,
  bannerReducer,
  newProductReducer
});
