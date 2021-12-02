import { initializeGoogleAuth } from '../../../api';
import { readUser, readUsers } from '../../../api/users';
import { AUTH_LOGIN, AUTH_LOGOUT, SET_USER, SET_USERS } from '../../types/auth';
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

export const getUsers = (force = false) => {
  return async (dispatch, getState) => {
    const state = getState();
    const cached = state.users.cached;

    if (cached === true && force === false) {
      return;
    }

    try {
      const users = await readUsers();

      dispatch(setUsers(users));
    } catch (response) {
      console.log(response);
    }
  };
};

// should be in a users slice
export const getUser = (userId, force = false) => {
  return async (dispatch, getState) => {
    const state = getState();
    const user = state.users.entitites[userId];

    if (user !== undefined && force === false) {
      return;
    }

    try {
      const stats = await readUser(userId);

      dispatch(
        setUser({
          id: userId,
          stats,
        }),
      );
    } catch (response) {
      console.log(response);
    }
  };
};

// should be in a users slice
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
