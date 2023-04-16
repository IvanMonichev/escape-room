import { Time } from '../../types/types';

type DateProps = {
  time: Time;
};

function DateItem({ time }: DateProps): JSX.Element {
  return (
    <label className='custom-radio booking-form__date'>
      <input type='radio' id={time.time} name='date' required defaultValue={time.time} disabled={!time.isAvailable} />
      <span className='custom-radio__label'>{time.time}</span>
    </label>
  );
}

export default DateItem;
