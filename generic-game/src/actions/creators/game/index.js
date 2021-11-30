import { GAME_ENDED, GAME_STARTED } from '../../types/game';

export const gameStarted = () => {
  return {
    type: GAME_STARTED,
  };
};

export const gameEnded = () => {
  return {
    type: GAME_ENDED,
  };
};
