import { useAuth } from '../../hooks';

export const Authorize = ({ children }) => {
  const { authenticated, established } = useAuth();

  return (
    <div className="text-center w-full flex">
      {!established
        ? '...logging you in'
        : authenticated
        ? children
        : 'Please login first'}
    </div>
  );
};
