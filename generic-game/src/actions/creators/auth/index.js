import { initializeGoogleAuth } from '../../../api';
import { AUTH_LOGIN, AUTH_LOGOUT } from '../../types/auth';
import {
  getUserProfile,
  getUserStats,
  postUserProfile,
  postUserStats,
} from '../profile';

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
    } catch (response) {
      const { status: httpsStatus } = response;

      if (httpsStatus === 404) {
        await dispatch(postUserStats(id));
      }

      // do more error handling
    }

    // read profile
    // determine if user has profile
    // if not, create
    try {
      // dispatch getUserProfile
      await dispatch(getUserProfile(id));
    } catch (response) {
      await dispatch(postUserProfile(id));
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
