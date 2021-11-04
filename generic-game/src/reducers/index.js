import { combineReducers } from 'redux';
import uiReducer from './ui';

const reducers = combineReducers({
  ui: uiReducer,
});

export default reducers;
