import { GAME_ENDED, GAME_STARTED } from '../actions/types/game';

const initialState = {
  playing: false,
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_STARTED:
      return {
        ...state,
        playing: true,
      };
    case GAME_ENDED:
      return {
        ...state,
        playing: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
