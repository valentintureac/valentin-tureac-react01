import { useSelector } from 'react-redux';

export const useAuth = () => {
  return useSelector(({ auth }) => {
    return auth;
  });
};
