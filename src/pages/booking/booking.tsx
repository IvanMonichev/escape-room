import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FormBooking from '../../components/form-booking/form-booking';
import MapBooking from '../../components/map-booking/map-booking';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchOffers, fetchQuest } from '../../store/action';
import { getIsOffersLoading, getIsQuestLoading, getOffers, getQuest } from '../../store/site-data/selectors';
import { Offer } from '../../types/types';

function Booking(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isQuestLoading = useAppSelector(getIsQuestLoading);
  const quest = useAppSelector(getQuest);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const offers = useAppSelector(getOffers);
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  useEffect(() => {
    const { id } = params;
    if (id) {
      dispatch(fetchQuest(id));
    }
  }, [params, dispatch]);

  useEffect(() => {
    const { id } = params;
    if (id) {
      dispatch(fetchOffers(id));
    }
  }, [params, dispatch]);

  useEffect(() => {
    if (offers) {
      setActiveOffer(offers[0]);
    }
  }, [offers]);

  const handleActiveOffer = (offer: Offer) => {
    setActiveOffer(offer);
  };

  if (!offers || !quest || !activeOffer) {
    return null;
  }

  if (isOffersLoading || isQuestLoading) {
    return <Spinner />;
  }

  const { title, peopleMinMax } = quest;
  const { slots } = activeOffer;

  return (
    <main className='page-content decorated-page'>
      <div className='decorated-page__decor' aria-hidden='true'>
        <picture>
          <source
            type='image/webp'
            srcSet='/img/content/maniac/maniac-bg-size-m.webp, /img/content/maniac/maniac-bg-size-m@2x.webp 2x'
          />
          <img
            src='/img/content/maniac/maniac-bg-size-m.jpg'
            srcSet='/img/content/maniac/maniac-bg-size-m@2x.jpg 2x'
            width='1366'
            height='1959'
            alt=''
          />
        </picture>
      </div>
      <div className='container container--size-s'>
        <div className='page-content__title-wrapper'>
          <h1 className='subtitle subtitle--size-l page-content__subtitle'>Бронирование квеста</h1>
          <p className='title title--size-m title--uppercase page-content__title'>{title}</p>
        </div>
        <div className='page-content__item'>
          <MapBooking offers={offers} activeOffer={activeOffer} onClick={handleActiveOffer} />
        </div>
        <FormBooking activeOffer={activeOffer} peopleMinMax={peopleMinMax} slots={slots} questId={quest.id} />
      </div>
    </main>
  );
}

export default Booking;
