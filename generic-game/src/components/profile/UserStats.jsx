import classNames from 'classnames';
import {
  IoGameController,
  BiHappy,
  RiEmotionUnhappyLine,
} from 'react-icons/all';

export const UserStats = ({
  gamesWon,
  gamesLost,
  gamesPlayed,
  className = '',
  entryClassName = 'p-3',
}) => {
  const baseIconClasses = 'mr-2 fill-current ';
  const playedIconClasses = classNames(baseIconClasses, 'text-purple-500');
  const lostIconClasses = classNames(baseIconClasses, 'text-green-500');
  const wonIconClasses = classNames(baseIconClasses, 'text-red-500');

  className = classNames(className, 'border rounded-md shadow');
  entryClassName = classNames(entryClassName, 'border-b');

  return (
    <ul className={className}>
      <li className={entryClassName}>
        <IoGameController className={playedIconClasses} />
        {gamesPlayed} games played.
      </li>
      <li className={entryClassName}>
        <BiHappy className={wonIconClasses} />
        {gamesWon} games won.
      </li>
      <li className={entryClassName}>
        <RiEmotionUnhappyLine className={lostIconClasses} />
        {gamesLost} games lost.
      </li>
    </ul>
  );
};

export default UserStats;
