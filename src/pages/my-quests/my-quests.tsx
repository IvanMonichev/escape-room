import { useEffect } from 'react';

import CardBooking from '../../components/card-booking/card-booking';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchReservation, removeReservation } from '../../store/action';
import { getIsReservationLoading, getRemovingStatus, getReservation } from '../../store/site-data/selectors';
import { Reservation } from '../../types/types';

function MyQuests(): JSX.Element {
  const dispatch = useAppDispatch();
  const statusRemoving = useAppSelector(getRemovingStatus);
  const reservation = useAppSelector(getReservation);
  const isReservationLoading = useAppSelector(getIsReservationLoading);

  const handleCancelCard = (id: Reservation['id']) => {
    dispatch(removeReservation(id));
  };

  useEffect(() => {
    dispatch(fetchReservation());
  }, [dispatch]);

  if (isReservationLoading) {
    return <Spinner />;
  }

  return (
    <main className='page-content decorated-page'>
      <div className='decorated-page__decor' aria-hidden='true'>
        <picture>
          <source
            type='image/webp'
            srcSet='img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x'
          />
          <img
            src='img/content/maniac/maniac-bg-size-m.jpg'
            srcSet='img/content/maniac/maniac-bg-size-m@2x.jpg 2x'
            width={1366}
            height={1959}
            alt=''
          />
        </picture>
      </div>
      <div className='container'>
        <div className='page-content__title-wrapper'>
          <h1 className='title title--size-m page-content__title'>Мои бронирования</h1>
        </div>
        {reservation.length ? (
          <div className='cards-grid'>
            {reservation.map((cardBooking) => (
              <CardBooking
                key={cardBooking.id}
                reservationItem={{ ...cardBooking }}
                onCancel={handleCancelCard}
                statusRemoving={statusRemoving}
              />
            ))}
          </div>
        ) : (
          <p className='title--size-s'>Бронирований пока нет</p>
        )}
      </div>
    </main>
  );
}

export default MyQuests;
