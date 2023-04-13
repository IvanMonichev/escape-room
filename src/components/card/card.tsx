import { QuestCard } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute, localizedLevels } from '../../utils/constant';

type CardProps = QuestCard;

function Card({ id, title, peopleMinMax, previewImgWebp, previewImg, level }: CardProps): JSX.Element {
  const [minPeople, maxPeople] = peopleMinMax;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            width={344}
            height={232}
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {`${minPeople}-${maxPeople} чел`}
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {localizedLevels[level]}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
