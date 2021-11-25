import { UserStats } from '../components/profile';
import { useAuth, useStats } from '../hooks';

export const HomePage = () => {
  const { authenticated, established } = useAuth();
  const stats = useStats();

  return (
    <div className="p-4 container mx-auto">
      <h1>Welcomed to Generic Game</h1>
      {!established ? (
        '...add spinner here'
      ) : authenticated ? (
        <UserStats className="mt-8" entryClassName="p-3" {...stats}></UserStats>
      ) : (
        <div className="text-center">
          <button
            className="w-75 w-3/4 py-20 border rounded-md shadow hover:bg-gray-100 md:max-w-xl"
            type="button"
            title="Login"
          >
            Login to get started
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
