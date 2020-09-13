import { combineReducers } from 'redux';
import campaignReducer from './campaign';
import loaderReducer from './loader';

export default combineReducers({
  campaigns: campaignReducer,
  isloading: loaderReducer
});
