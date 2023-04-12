import { typesQuests } from '../../constant';


function CitiesList(): JSX.Element {
  return (
    <ul className="filter__list">
      {typesQuests.map(({name, title}, index) => (
        <li
          key={name}
          className="filter__item"
          tabIndex={index}
        >
          <input type="radio" name="type" id="all" defaultChecked />
          <label className="filter__label" htmlFor="all">
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
      ))}
    </ul>
  );
}

export default CitiesList;
