import { CLICKER_CLICK, CLICKER_DECREMENT } from '../actions/types/ui';

const initialState = {
  clicker: 0,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLICKER_CLICK:
      const newState = {};

      newState.clicker = state.clicker + payload;
      return newState;

    case CLICKER_DECREMENT:
      return {
        ...state,
        clicker: state.clicker - payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
