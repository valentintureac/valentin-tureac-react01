import { createUser, readUser } from '../../../api/users';

// getUserStats
export const getUserStats = (userId) => {
  return async (dispatch) => {
    try {
      const stats = await readUser(userId);
      // write stats to state

      return stats;
    } catch ({ response }) {
      return Promise.reject(response);
    }
  };
};

// postUserStats
export const postUserStats = (userId) => {
  return async () => {
    await createUser(userId);
  };
};
