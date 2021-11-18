import { initializeGoogleAuth } from '../../../api';
import { AUTH_LOGIN, AUTH_LOGOUT } from '../../types/auth';
import { getUserStats, postUserStats } from '../profile';

export const login = (user) => {
  // switch to thunk
  // return {
  //   type: AUTH_LOGIN,
  //   payload: user,
  // };
  return async (dispatch) => {
    const { id } = user;

    // await dispatch(postUserStats(id));

    // read
    // determine if user is there
    // if not, create
    try {
      await dispatch(getUserStats(id));
    } catch (error) {
      await dispatch(postUserStats(id));
    }

    dispatch(setLogIn(user));
  };
};

export const setLogIn = (user) => {
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

export const requestSignIn = () => {
  return async () => {
    return initializeGoogleAuth().then((GoogleAuth) => {
      GoogleAuth.signIn();
    });
  };
};

export const requestSignOut = () => {
  return async () => {
    return initializeGoogleAuth().then((GoogleAuth) => {
      GoogleAuth.signOut();
    });
  };
};
