import { AUTH_LOGIN, AUTH_LOGOUT } from '../../types/auth';

export const login = (user) => {
  return {
    type: AUTH_LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};
