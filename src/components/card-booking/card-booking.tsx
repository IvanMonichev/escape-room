import { Link } from 'react-router-dom';

import { SubmitStatus } from '../../types/state';
import { Reservation } from '../../types/types';
import { AppRoute, localizedLevels } from '../../utils/constant';
import { localizeDay } from '../../utils/util';

type CardBookingProps = {
  reservationItem: Reservation;
  onCancel: (id: Reservation['id']) => void;
  statusRemoving: SubmitStatus;
};

function CardBooking({ reservationItem, onCancel, statusRemoving }: CardBookingProps): JSX.Element {
  const { quest, date, time, location, peopleCount } = reservationItem;
  const { previewImgWebp, previewImg, title, id, type, level } = quest;

  const handleCancelBooking = () => {
    onCancel(reservationItem.id);
  };

  return (
    <div className='quest-card'>
      <div className='quest-card__img'>
        <picture>
          <source type='image/webp' srcSet={previewImgWebp} />
          <img src={previewImg} width={344} height={232} alt={title} />
        </picture>
      </div>
      <div className='quest-card__content'>
        <div className='quest-card__info-wrapper'>
          <Link className='quest-card__link' to={`${AppRoute.Quest}/${id}`}>
            {title}
          </Link>
          <span className='quest-card__info'>
            [{localizeDay(date)},&nbsp;{time}. {location.address}]
          </span>
        </div>
        <ul className='tags quest-card__tags'>
          <li className='tags__item'>
            <svg width={11} height={14} aria-hidden='true'>
              <use xlinkHref={`#icon-${type}`} />
            </svg>
            {peopleCount}&nbsp;чел
          </li>
          <li className='tags__item'>
            <svg width={14} height={14} aria-hidden='true'>
              <use xlinkHref={`#icon-${level}`} />
            </svg>
            {localizedLevels[level]}
          </li>
        </ul>
        <button
          className='btn btn--accent btn--secondary quest-card__btn'
          type='button'
          onClick={handleCancelBooking}
          disabled={statusRemoving === SubmitStatus.Pending}
        >
          {statusRemoving === SubmitStatus.Pending ? 'Отмена...' : 'Отменить'}
        </button>
      </div>
    </div>
  );
}

export default CardBooking;
