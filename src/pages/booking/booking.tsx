import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DateList from '../../components/date-list/date-list';
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

  const { title } = quest;
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
        <form className='booking-form' action='https://echo.htmlacademy.ru/' method='post'>
          <fieldset className='booking-form__section'>
            <legend className='visually-hidden'>Выбор даты и времени</legend>
            <DateList time={slots.today} dateIndex='Сегодня' />
            <DateList time={slots.tomorrow} dateIndex='Завтра' />
          </fieldset>
          <fieldset className='booking-form__section'>
            <legend className='visually-hidden'>Контактная информация</legend>
            <div className='custom-input booking-form__input'>
              <label className='custom-input__label' htmlFor='name'>
                Ваше имя
              </label>
              <input type='text' id='name' name='name' placeholder='Имя' required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
            </div>
            <div className='custom-input booking-form__input'>
              <label className='custom-input__label' htmlFor='tel'>
                Контактный телефон
              </label>
              <input type='tel' id='tel' name='tel' placeholder='Телефон' required pattern='[0-9]{10,}' />
            </div>
            <div className='custom-input booking-form__input'>
              <label className='custom-input__label' htmlFor='person'>
                Количество участников
              </label>
              <input type='number' id='person' name='person' placeholder='Количество участников' required />
            </div>
            <label className='custom-checkbox booking-form__checkbox booking-form__checkbox--children'>
              <input type='checkbox' id='children' name='children' defaultChecked />
              <span className='custom-checkbox__icon'>
                <svg width={20} height={17} aria-hidden='true'>
                  <use xlinkHref='#icon-tick' />
                </svg>
              </span>
              <span className='custom-checkbox__label'>Со&nbsp;мной будут дети</span>
            </label>
          </fieldset>
          <button className='btn btn--accent btn--cta booking-form__submit' type='submit'>
            Забронировать
          </button>
          <label className='custom-checkbox booking-form__checkbox booking-form__checkbox--agreement'>
            <input type='checkbox' id='id-order-agreement' name='user-agreement' required />
            <span className='custom-checkbox__icon'>
              <svg width={20} height={17} aria-hidden='true'>
                <use xlinkHref='#icon-tick' />
              </svg>
            </span>
            <span className='custom-checkbox__label'>
              Я&nbsp;согласен с
              <a className='link link--active-silver link--underlined' href='booking#'>
                правилами обработки персональных данных
              </a>
              &nbsp;и пользовательским соглашением
            </span>
          </label>
        </form>
      </div>
    </main>
  );
}

export default Booking;
