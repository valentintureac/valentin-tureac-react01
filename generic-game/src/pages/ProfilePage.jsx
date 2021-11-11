import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks';

export const ProfilePage = () => {
  const history = useHistory();
  const { authenticated } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      history.push('/');
    }
  }, [authenticated, history]);

  return 'Profile';
};

export default ProfilePage;
