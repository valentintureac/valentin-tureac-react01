import axios from 'axios';

const emptyStats = {
  gamesWon: 0,
  gamesLost: 0,
  gamesPlayed: 0,
};

const usersApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

// CRUD -> Create Read Update Delete

// createUser
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
// POST /profiles/2312313
export const createProfile = async (userId, colors) => {
  const payload = {
    id: userId,
    creature: colors,
  };

  return await usersApi.post(`/profiles`, payload);
};

// readProfile
export const readProfile = async (userId) => {
  const { data } = await usersApi.get(`/profiles/${userId}`);

  if (data.creature) {
    return data.creature;
  }
  // return data?.creature;

  return undefined;
};

// updateProfile
export const updateProfile = async (userId, colors) => {
  const payload = {
    creature: colors,
  };

  return await usersApi.patch(`/profiles/${userId}`, payload);
};

export const updateGameLost = async (userId, userStats) => {
  const payload = {
    stats: {
      ...userStats,
      gamesLost: ++userStats.gamesLost,
      gamesPlayed: ++userStats.gamesPlayed,
    },
  };

  const { data } = await usersApi.patch(`/users/${userId}`, payload);

  if (data.stats) {
    return data.stats;
  }

  return undefined;
};

export const updateGameWon = async (userId, userStats) => {
  const payload = {
    stats: {
      ...userStats,
      gamesLost: --userStats.gamesLost,
      gamesWon: ++userStats.gamesWon,
    },
  };

  const { data } = await usersApi.patch(`/users/${userId}`, payload);

  if (data.stats) {
    return data.stats;
  }

  return undefined;
};

export const readUsers = async () => {
  try {
    const { data } = await usersApi.get(`/users`);

    return data;
  } catch (response) {
    return response;
  }
};

export default usersApi;
