import { combineReducers } from 'redux';
import authReduer from './authReducer';
import uiReducer from './uiReducer';
import profileReducer from './profileReducer';
import gameReducer from './gameReducer';

const reducer = combineReducers({
  ui: uiReducer,
  auth: authReduer,
  profile: profileReducer,
  game: gameReducer,
});

export default reducer;
