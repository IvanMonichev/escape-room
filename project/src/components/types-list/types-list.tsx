import { typesQuests } from '../../constant';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getType } from '../../store/site-process/selectors';
import { TypeName } from '../../types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setType } from '../../store/site-process/site-process';
import Type from '../type/type';
import { useCallback } from 'react';


function TypesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeType = useAppSelector(getType);

  const handleTypeClick = useCallback((name: TypeName) => {
    dispatch(setType(name));
  }, [dispatch]);

  return (
    <ul className="filter__list">
      {typesQuests.map(({name, title}, index) => (
        <Type
          key={name}
          name={name}
          title={title}
          index={index}
          isActive={name === activeType}
          onClick={handleTypeClick}
        />
      ))}
    </ul>
  );
}

export default TypesList;
