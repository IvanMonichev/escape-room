import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { postBooking } from '../../store/action';
import { Booking, Offer, Slots } from '../../types/types';
import { InvalidMessage, MAX_COUNT_NAME, MIN_COUNT_NAME, VALID_PHONE_REGEXP } from '../../utils/constant';
import { splitDate } from '../../utils/util';
import DateList from '../date-list/date-list';

type FormBookingProps = {
  activeOffer: Offer;
  peopleMinMax: number[];
  slots: Slots;
  questId: string;
};

function FormBooking({ activeOffer, peopleMinMax, slots, questId }: FormBookingProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [person, setPerson] = useState<string>('');
  const [children, setChildren] = useState<boolean>(false);
  const [minPeople, maxPeople] = peopleMinMax;
  // eslint-disable-next-line no-console
  console.log(time, date, name, tel, person, children);

  useEffect(() => {
    setTime('');
    setDate('');
  }, [activeOffer]);

  const handleTimeChange = (timeValue: string) => {
    const [dateItem, timeItem] = splitDate(timeValue);
    setTime(timeItem);
    setDate(dateItem);
  };

  const handleNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handleTelChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTel(evt.target.value);
  };

  const handlePersonChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPerson(evt.target.value);
  };

  const handleChildrenChange = () => {
    setChildren(!children);
  };

  const handleSubmitBookingForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (name.length < MIN_COUNT_NAME || name.length > MAX_COUNT_NAME) {
      toast.warn(InvalidMessage.Name);
      return;
    }

    if (!tel.match(VALID_PHONE_REGEXP)) {
      toast.warn(InvalidMessage.Phone);
      return;
    }

    if (Number(person) < minPeople || Number(person) > maxPeople) {
      toast.warn(`Количество участников должно быть больше ${minPeople} и менте ${maxPeople}`);
      return;
    }

    const data: Booking = {
      date,
      time,
      contactPerson: name,
      phone: tel,
      withChildren: children,
      peopleCount: Number(person),
      placeId: activeOffer.id,
      questId: questId,
    };

    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(postBooking(data));
  };

  return (
    <form
      className='booking-form'
      action='https://echo.htmlacademy.ru/'
      method='post'
      onSubmit={handleSubmitBookingForm}
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
            name='name'
            placeholder='Имя'
            required
            pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
            onChange={handleNameChange}
            min={1}
            max={15}
          />
        </div>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='tel'>
            Контактный телефон
          </label>
          <input type='tel' id='tel' name='tel' placeholder='Телефон' required onChange={handleTelChange} />
        </div>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='person'>
            Количество участников ({`${minPeople} - ${maxPeople}`})
          </label>
          <input
            type='number'
            id='person'
            name='person'
            placeholder='Количество участников'
            min={minPeople}
            max={maxPeople}
            required
            onChange={handlePersonChange}
          />
        </div>
        <label className='custom-checkbox booking-form__checkbox booking-form__checkbox--children'>
          <input type='checkbox' id='children' name='children' defaultChecked={children} />
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
        <input type='checkbox' id='id-order-agreement' name='user-agreement' required onChange={handleChildrenChange} />
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
