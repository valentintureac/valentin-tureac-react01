import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/creators/auth';
import { UserStats } from '../components/profile';

export const RankPage = ({ match }) => {
  const dispatch = useDispatch();
  const userId = match.params.id;

  const { user } = useSelector(({ users }) => {
    return {
      established: users.established,
      user: users.entities[userId],
    };
  });

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  if (!user) {
    return <></>;
  }

  return (
    <div className="mx-auto p-4 container">
      <header>
        <h1 className="text-3xl bold">User Rank {user.id}</h1>
      </header>

      <section className="mt-8">
        <UserStats {...user.stats}></UserStats>
      </section>
    </div>
  );
};

export default RankPage;
