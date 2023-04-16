import { Time } from '../../types/types';
import DateItem from '../date-item/date-item';

type DateListProps = {
  time: Time[];
  date: string;
  dateTitle: string;
  onChange: (time: string) => void;
  activeTime: string;
  activeDate: string;
};

function DateList({ time, date, dateTitle, onChange, activeTime, activeDate }: DateListProps): JSX.Element {
  return (
    <fieldset className='booking-form__date-section'>
      <legend className='booking-form__date-title'>{dateTitle}</legend>
      <div className='booking-form__date-inner-wrapper'>
        {time.map((timeItem) => (
          <DateItem
            key={timeItem.time}
            time={timeItem}
            date={date}
            onChange={onChange}
            activeTime={activeTime}
            activeDate={activeDate}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default DateList;
