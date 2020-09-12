import { combineReducers } from 'redux';
import campaignReducer from './';

export default combineReducers({
    campaigns: campaignReducer
});
