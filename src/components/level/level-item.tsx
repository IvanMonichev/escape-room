import { LevelName } from '../../types/types';
import { memo } from 'react';

type LevelProps = {
  name: LevelName;
  title: string;
  isActive: boolean;
  onClick: (name: LevelName) => void;
};

function LevelItem({ name, title, isActive, onClick }: LevelProps): JSX.Element {

  const handleLevelClick = () => {
    onClick(name);
  };

  return (
    <li className="filter__item" onClick={handleLevelClick}>
      <input type="radio" name="level" id={name} defaultChecked={isActive} />
      <label className="filter__label" htmlFor={name}>
        <span className="filter__label-text">{title}</span>
      </label>
    </li>
  );
}

export default memo(LevelItem);
