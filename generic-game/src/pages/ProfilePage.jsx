import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileForm } from '../components/profile';
import { useAuth } from '../hooks';

export const ProfilePage = () => {
  const history = useHistory();
  const { authenticated, established } = useAuth();

  useEffect(() => {
    if (!authenticated && established) {
      history.push('/');
    }
  }, [authenticated, history, established]);

  return (
    <div className="container mx-auto p-4">
      <header>
        <h1>Profilee</h1>
      </header>

      <section className="flex justify-between flex-wrap mt-8">
        <div className="w-full md:w-2/3">
          {/* create UserProfile component, populate it with info from the store */}
        </div>
      </section>

      <section className="mt-4 md:w-1/4 md:mt-12 mx-auto">
        <ProfileForm></ProfileForm>
      </section>
    </div>
  );
};

export default ProfilePage;
