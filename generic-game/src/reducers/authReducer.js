import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/types/auth';

const initialState = {
  // THE BAD;
  // user: null | {}
  user: null,
  authenticated: false,
  established: false,
};

// auth.authenticated?
// auth.established?

const authReduer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authenticated: true,
        established: true,
        user: payload,
      };
    case AUTH_LOGOUT:
      return {
        // ...state,
        // authenticated: false,
        // established: true,
        // user: null,
        ...initialState,
        established: true,
      };
    default:
      return state;
  }
};

export default authReduer;
