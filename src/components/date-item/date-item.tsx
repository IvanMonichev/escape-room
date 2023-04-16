import { ChangeEvent } from 'react';

import { Time } from '../../types/types';

type DateProps = {
  time: Time;
  date: string;
  onChange: (time: string) => void;
  activeTime: string;
  activeDate: string;
};

function DateItem({ time, date, onChange, activeTime, activeDate }: DateProps): JSX.Element {
  const handleChangeTime = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.id);
  };

  const addPrefixDate = (value: string) => `${date}-${value}`;

  const isChecked = time.time === activeTime && date === activeDate;

  return (
    <label className='custom-radio booking-form__date'>
      <input
        type='radio'
        name='date'
        id={addPrefixDate(time.time)}
        disabled={!time.isAvailable}
        onChange={handleChangeTime}
        checked={isChecked}
        required
      />
      <span className='custom-radio__label'>{time.time}</span>
    </label>
  );
}

export default DateItem;
