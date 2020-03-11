import { addDays } from './holidayService';

export const isWeekend = date => date.getDay() === 6 || date.getDay() === 0;

export const getPreviousWeekend = date => {
  const currentDate = new Date(date);
  return addDays(currentDate, -1 * (currentDate.getDay() + 1));
};

export const getNextWeekend = date => {
  const currentDate = new Date(date);
  return addDays(currentDate, 6 - currentDate.getDay());
};

export const getNumberOfWeekends = (startDate, vacationDurationDays) => {
  const endDateDay = startDate.getDay() + vacationDurationDays;

  const numberOfFullWeekends = Math.trunc(endDateDay / 7);
  const numberOfHalfWeekends = endDateDay % 7 === 6 ? 1 : 0;

  return numberOfFullWeekends * 2 + numberOfHalfWeekends;
};
