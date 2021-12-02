import { ImUser } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Users = () => {
  const users = useSelector((state) => {
    const { entities: users } = state.users;

    return users;
  });

  if (Object.entries(users).length <= 0) {
    return <>no users</>;
  }

  return (
    <ul className="border rounded-md shadow">
      {Object.values(users).map(({ id, stats }) => {
        return (
          <li className="border-b p-3" key={id}>
            <Link
              to={`/ranks/${id}`}
              className="flex justify-between items-center"
            >
              <ImUser></ImUser>
              <span className="truncate inline-block w-32">{id}</span>
              <span>Games played: {stats.gamesPlayed}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
