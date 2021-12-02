import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../actions/creators/auth';
import { Users } from '../components/profile';

export const RanksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers);
  }, [dispatch]);

  return (
    <div className="p-4 container mx-auto">
      <header>
        <h1 className="text-3xl bold">Ranks</h1>
      </header>

      <section className="mt-8">
        <Users></Users>
      </section>
    </div>
  );
};

export default RanksPage;
