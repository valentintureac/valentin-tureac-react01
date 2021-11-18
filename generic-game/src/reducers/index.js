import { combineReducers } from 'redux';
import authReduer from './authReducer';
import uiReducer from './uiReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReduer,
  profile: profileReducer,
});

export default reducers;
