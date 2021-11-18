import axios from 'axios';

const emptyStats = {
  gamesWon: 0,
  gamesLost: 0,
  gamesPlayed: 0,
};

const userApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

// CRUD -> Create Read Update Delete

// createuser
export const createUser = async (userId) => {
  const payload = {
    id: userId,
    stats: emptyStats,
  };

  return await userApi.post('/users', payload);
};

// readUser
export const readUser = async (userId) => {
  const endpoint = `/users/${userId}`;

  const { data } = await userApi.get(endpoint);

  if (data) {
    return data;
  }

  return undefined;
};

export default userApi;
