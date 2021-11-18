import { PROFILE_SET_STATS } from '../actions/types/profile';

const initialState = {
  stats: {
    gamesWon: 0,
    gamesLost: 0,
    gamesPlayed: 0,
  },
  creature: {
    mainColor: '#ffabce',
    secondaryColor: '#ff7bad',
    eyeColor: '#000000',
  },
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_SET_STATS:
      return {
        ...state,
        stats: payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
