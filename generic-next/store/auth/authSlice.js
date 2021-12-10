import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register, login, logout } from '../../api/auth';

const initialState = {
  user: {},
  authenticated: false,
  established: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.authenticated = true;
    },
    unsetUser: () => {
      state.user = {};
      state.authenticated = false;
    },
  },
});

export const { setUser, unsetUser } = authSlice.actions;

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { dispatch }) => {
    const credentials = await register(name, email, password);

    document.cookie = `token=${credentials.token}`;

    dispatch(setUser(credentials.user));

    return credentials;
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { dispatch }) => {
    const credentials = await login(email, password);

    document.cookie = `token=${credentials.token}`;

    dispatch(setUser(credentials.user));

    return credentials;
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    await logout();

    dispatch(unsetUser());
  },
);

export default authSlice.reducer;
