import axios from 'axios';
import { BiDialpadAlt } from 'react-icons/bi';

const emptyStats = {
  gamesWon: 0,
  gamesLost: 0,
  gamesPlayed: 0,
};

const usersApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

// CRUD -> Create Read Update Delete

// createuser
export const createUser = async (userId) => {
  const payload = {
    id: userId,
    stats: emptyStats,
  };

  return await usersApi.post('/users', payload);
};

// readUser
export const readUser = async (userId) => {
  const endpoint = `/users/${userId}`;

  const { data } = await usersApi.get(endpoint);

  if (data.stats) {
    return data.stats;
  }

  return undefined;
};

// createProfile
// POST /profiles/231123
export const createProfile = async (userId, colors) => {
  const payload = {
    id: userId,
    creature: colors,
  };

  return await usersApi.post('/profiles', payload);
};

// readProfile
export const readProfile = async (userId) => {
  const { data } = await usersApi.get(`/profiles/${userId}`);

  if (data.creature) {
    return data.creature;
  }

  return undefined;
};

// updateProfile
export const updateProfile = async (userId, color) => {
  const payload = {
    id: userId,
    creature: color,
  };

  return await usersApi.patch(`/profiles/${userId}`, payload);
};

export const updateGameLost = async (userId, userStats) => {
  const payload = {
    ...userStats,
    gamesLost: userStats.gamesLost + 1,
    gamesPlayed: userStats.gamesPlayed + 1,
  };

  const { data } = await usersApi.patch(`/users/${userId}`, payload);

  if (data.stats) {
    return data.stats;
  }

  return undefined;
};

export const updateGameWon = async (userId, userStats) => {
  const payload = {
    ...userStats,
    gamesLost: userStats.gamesLost - 1,
    gamesWon: userStats.gamesWon + 1,
  };

  const { data } = await usersApi.patch(`/users/${userId}`, payload);

  if (data.stats) {
    return data.stats;
  }

  return undefined;
};

export default usersApi;
