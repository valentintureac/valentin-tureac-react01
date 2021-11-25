import { useSelector } from 'react-redux';

export const useStats = () => {
  return useSelector(({ profile }) => {
    return profile.stats;
  });
};

export default useStats;
