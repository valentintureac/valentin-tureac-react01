import { SET_USER, SET_USERS } from '../actions/types/auth';

/*
 * {
  '114620690899337185678': {
    id: '114620690899337185678',
    stats: {
    }
  }
}
*/

const initialState = {
  entities: {},
  // the lamest cache
  cached: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      const users = payload.reduce((users, user) => {
        const { id, stats } = user;

        users[id] = {
          id,
          stats,
        };

        return users;
      }, {});

      return {
        ...state,
        entities: users,
        cached: true,
      };
    case SET_USER:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: payload,
        },
      };
    default:
      return state;
  }
};

export default usersReducer;
