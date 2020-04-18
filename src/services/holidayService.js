import holidays from '../mock/holidays.json';
import { isWeekend } from '../services/weekendService';

export const getDates = (rangeStartDateIso, rangeEndDateIso) => {
  const endDate = new Date(rangeEndDateIso);
  let currentDate = new Date(rangeStartDateIso);

  const dates = [];

  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  return dates;
};

export const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);

  return newDate;
};

export const getHolidays = year => {
  const selectedYearHolidays = [];

  for (let holiday of holidays) {
    if (holiday.year === year) {
      selectedYearHolidays.push(holiday);
    }
  }

  return selectedYearHolidays;
};

export const getNonWeekendHolidays = year => {
  const nonWeekendHolidays = [];

  for (let holiday of holidays) {
    if (holiday.year === year && !isWeekend(new Date(holiday.date))) {
      nonWeekendHolidays.push(holiday);
    }
  }

  return nonWeekendHolidays;
};
