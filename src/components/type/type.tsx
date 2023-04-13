import { TypeName } from '../../types/types';
import { memo } from 'react';

type TypeProps = {
  name: TypeName;
  title: string;
  index: number;
  isActive: boolean;
  onClick: (name: TypeName) => void;
};

function Type({ name, title, index, isActive, onClick }: TypeProps): JSX.Element {
  const handleTypeClick = () => {
    onClick(name);
  };

  return (
    <li
      className="filter__item"
      tabIndex={index}
      onClick={handleTypeClick}
    >
      <input type="radio" name="type" id={name} defaultChecked={isActive}/>
      <label className="filter__label" htmlFor={name}>
        <svg
          className="filter__icon"
          width={26}
          height={30}
          aria-hidden="true"
        >
          <use xlinkHref={`#icon-${name}`} />
        </svg>
        <span className="filter__label-text">{title}</span>
      </label>
    </li>
  );
}

export default memo(Type);
