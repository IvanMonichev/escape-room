import { useAppSelector } from '../../hooks/useAppSelector';
import {
  getIsReservationLoading,
  getReservation,
} from '../../store/site-data/selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchReservation } from '../../store/action';
import { useEffect } from 'react';
import Spinner from '../../components/spinner/spinner';
import CardBooking from '../../components/card-booking/card-booking';

function MyQuests(): JSX.Element {
  const dispatch = useAppDispatch();

  const reservation = useAppSelector(getReservation);
  const isReservationLoading = useAppSelector(getIsReservationLoading);
  // eslint-disable-next-line no-console
  console.log(reservation);
  useEffect(() => {
    dispatch(fetchReservation());

  }, [dispatch]);

  if(isReservationLoading) {
    return <Spinner />;
  }


  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width={1366}
            height={1959}
            alt=""
          />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">
            Мои бронирования
          </h1>
        </div>
        <div className="cards-grid">
          {reservation.map((cardBooking) => (
            <CardBooking key={cardBooking.id} reservationItem={{...cardBooking}} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MyQuests;
