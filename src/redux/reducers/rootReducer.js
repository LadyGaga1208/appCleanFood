import { combineReducers } from 'redux';

import userReducer from './userReducer';
import bannerReducer from './bannerReducer';

export default combineReducers({
  userReducer,
  bannerReducer
});
