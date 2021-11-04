import { CLICKER_CLICK, CLICKER_DECREMENT } from '../../types/ui';

export const clickClicker = (payload = 1) => {
  return {
    type: CLICKER_CLICK,
    payload, // payload: payload,
  };
};

export const decrementClicker = (payload = 1) => {
  return {
    type: CLICKER_DECREMENT,
    payload,
  };
};
