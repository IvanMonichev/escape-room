import { Level } from '../../constant';
import { LevelName } from '../../types/types';
import LevelItem from '../level/level-item';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getLevel } from '../../store/site-process/selectors';
import { useCallback } from 'react';
import { setLevel } from '../../store/site-process/site-process';


function LevelsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeLevel = useAppSelector(getLevel);

  const handleLevelClick = useCallback((name: LevelName) => {
    dispatch(setLevel(name));
  }, [dispatch]);

  return (
    <ul className="filter__list">
      {(Object.entries(Level) as [LevelName, Level][]).map(([name, title]) => (
        <LevelItem key={name} name={name} title={title} isActive={name === activeLevel} onClick={handleLevelClick} />
      ))}
    </ul>
  );
}

export default LevelsList;
