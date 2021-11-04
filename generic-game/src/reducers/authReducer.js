import { AUTH_LOGIN } from '../actions/types/auth';

const initialState = {
  // THE BAD;
  // user: null | {}
  user: null,
  authenticated: false,
  established: false,
};

// auth.authenticated?
// auth.established?

export const authReduer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authenticated: true,
        established: true,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReduer;
