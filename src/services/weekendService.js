import { addDays } from '../services/holidayService';
import { DAYS, NUM_DAYS_IN_WEEK } from '../utils/constants';

export const isWeekend = date =>
  date.getDay() === DAYS.saturday || date.getDay() === DAYS.sunday;

export const getPreviousWeekend = date => {
  const currentDate = new Date(date);
  return addDays(currentDate, -1 * (currentDate.getDay() + 1));
};

export const getNextWeekend = date => {
  const currentDate = new Date(date);
  return addDays(currentDate, DAYS.saturday - currentDate.getDay());
};

export const getNumberOfWeekends = (startDate, vacationDays) => {
  const endDateDay = startDate.getDay() + vacationDays;

  const numberOfFullWeekends = Math.trunc(endDateDay / NUM_DAYS_IN_WEEK);
  const numberOfHalfWeekends =
    endDateDay % NUM_DAYS_IN_WEEK === DAYS.saturday ? 1 : 0;

  return numberOfFullWeekends * 2 + numberOfHalfWeekends;
};
