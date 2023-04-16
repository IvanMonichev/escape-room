import { Time } from '../../types/types';
import DateItem from '../date-item/date-item';

type DateListProps = {
  time: Time[];
  dateIndex: string;
};

function DateList({ time, dateIndex }: DateListProps): JSX.Element {
  return (
    <fieldset className='booking-form__date-section'>
      <legend className='booking-form__date-title'>{dateIndex}</legend>
      <div className='booking-form__date-inner-wrapper'>
        {time.map((timeItem) => (
          <DateItem key={timeItem.time} time={timeItem} />
        ))}
      </div>
    </fieldset>
  );
}

export default DateList;
