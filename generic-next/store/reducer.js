import { combineReducers } from 'redux';
import ui from './ui/uiSlice';
import auth from './auth/authSlice';

const rootReducer = combineReducers({ ui, auth });

export default rootReducer;
