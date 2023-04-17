import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styles from './form-booking.module.css';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { postBooking } from '../../store/action';
import { getBookingStatus } from '../../store/site-data/selectors';
import { setSubmitStatus } from '../../store/site-data/site-data';
import { SubmitStatus } from '../../types/state';
import { Booking, Offer, Slots } from '../../types/types';
import { AppRoute, MAX_COUNT_NAME, MIN_COUNT_NAME, VALID_PHONE_REGEXP } from '../../utils/constant';
import { splitDate } from '../../utils/util';
import DateList from '../date-list/date-list';

type FormBookingProps = {
  activeOffer: Offer;
  peopleMinMax: number[];
  slots: Slots;
  questId: string;
};

type BookingFormData = {
  name: string;
  tel: string;
  person: string;
  children: boolean;
};

function FormBooking({ activeOffer, peopleMinMax, slots, questId }: FormBookingProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [minPeople, maxPeople] = peopleMinMax;
  const submitStatus = useAppSelector(getBookingStatus);
  const isSubmitting = submitStatus === SubmitStatus.Pending;

  useEffect(() => {
    setTime('');
    setDate('');
  }, [activeOffer]);

  const handleTimeChange = (timeValue: string) => {
    const [dateItem, timeItem] = splitDate(timeValue);
    setTime(timeItem);
    setDate(dateItem);
  };

  const onSubmit = (formData: BookingFormData) => {
    const data: Booking = {
      date,
      time,
      contactPerson: formData.name,
      phone: formData.tel,
      withChildren: formData.children,
      peopleCount: Number(formData.person),
      placeId: activeOffer.id,
      questId: questId,
    };

    dispatch(postBooking(data));
  };

  useEffect(() => {
    if (submitStatus === SubmitStatus.Fullfilled) {
      setTime('');
      setDate('');
      navigation(AppRoute.MyQuests);
    }

    return () => {
      dispatch(setSubmitStatus());
    };
  }, [submitStatus, dispatch, navigation]);

  return (
    <form
      className='booking-form'
      action='https://echo.htmlacademy.ru/'
      method='post'
      onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
    >
      <fieldset className='booking-form__section'>
        <legend className='visually-hidden'>Выбор даты и времени</legend>
        <DateList
          time={slots.today}
          date={Object.keys(slots)[0]}
          onChange={handleTimeChange}
          activeTime={time}
          activeDate={date}
          dateTitle='Сегодня'
        />
        <DateList
          time={slots.tomorrow}
          date={Object.keys(slots)[1]}
          onChange={handleTimeChange}
          activeTime={time}
          activeDate={date}
          dateTitle='Завтра'
        />
      </fieldset>
      <fieldset className='booking-form__section'>
        <legend className='visually-hidden'>Контактная информация</legend>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='name'>
            Ваше имя
          </label>
          <input
            type='text'
            id='name'
            placeholder='Имя'
            {...register('name', {
              required: 'Укажите почту',
              minLength: MIN_COUNT_NAME,
              maxLength: MAX_COUNT_NAME,
              pattern: /[А-Яа-яЁёA-Za-z'-]{1,}/,
            })}
          />
          {errors.name?.type === 'required' && <p className={styles.error}>Укажите имя</p>}
          {errors.name?.type === 'min' && (
            <p className={styles.error}>Минимальное количество символов {MIN_COUNT_NAME}</p>
          )}
          {errors.name?.type === 'max' && (
            <p className={styles.error}>Максимальное количество символов {MAX_COUNT_NAME}</p>
          )}
          {errors.name?.type === 'pattern' && <p className={styles.error}>Некорректный формат имени</p>}
        </div>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='tel'>
            Контактный телефон
          </label>
          <input
            type='tel'
            id='tel'
            placeholder='Телефон'
            required
            {...register('tel', { required: 'Укажите телефон', pattern: VALID_PHONE_REGEXP })}
          />
          {errors.tel?.type === 'required' && <p className={styles.error}>Укажите телефон</p>}
          {errors.tel?.type === 'pattern' && <p className={styles.error}>Некорректный формат телефона</p>}
        </div>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='person'>
            Количество участников ({`${minPeople} - ${maxPeople}`})
          </label>
          <input
            type='number'
            id='person'
            placeholder='Количество участников'
            min={minPeople}
            max={maxPeople}
            {...register('person', { required: 'Укажите количество участников', min: minPeople, max: maxPeople })}
          />
          {errors.person?.type === 'required' && <p className={styles.error}>Укажите количество участников</p>}
          {errors.person?.type === 'min' && (
            <p className={styles.error}>Минимальное количество участников {minPeople}</p>
          )}
          {errors.person?.type === 'max' && (
            <p className={styles.error}>Максимальное количество участников {maxPeople}</p>
          )}
        </div>
        <label className='custom-checkbox booking-form__checkbox booking-form__checkbox--children'>
          <input type='checkbox' id='children' {...register('children')} />
          <span className='custom-checkbox__icon'>
            <svg width={20} height={17} aria-hidden='true'>
              <use xlinkHref='#icon-tick' />
            </svg>
          </span>
          <span className='custom-checkbox__label'>Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      {!(submitStatus === SubmitStatus.Fullfilled) ? (
        <button className='btn btn--accent btn--cta booking-form__submit' type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Бронируем...' : 'Забронировать'}
        </button>
      ) : (
        <p className='title--size-s' style={{ textAlign: 'center' }}>
          Бронирование прошло успешно
        </p>
      )}
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
  );
}

export default FormBooking;
