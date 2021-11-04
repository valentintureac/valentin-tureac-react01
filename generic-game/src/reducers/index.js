import { combineReducers } from 'redux';
import authReduer from './authReducer';
import uiReducer from './uiReducer';

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReduer,
});

export default reducers;
