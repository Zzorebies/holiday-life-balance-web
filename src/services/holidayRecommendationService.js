import { addDays, getNonWeekendHolidays } from '../services/holidayService';
import {
  getNumberOfWeekends,
  getPreviousWeekend
} from '../services/weekendService';

export const getHolidayRecommendations = (year, vacationDays) => {
  const holidayRecommendations = [];
  const nonWeekendHolidays = getNonWeekendHolidays(year);

  for (let i = 0; i < nonWeekendHolidays.length; i++) {
    const holiday = nonWeekendHolidays[i];
    const currentDate = new Date(holiday.date);

    const startDate =
      currentDate.getDay() >= 3 ? currentDate : getPreviousWeekend(currentDate);
    const endDate = addDays(startDate, vacationDays);

    const numberOfWeekends = getNumberOfWeekends(startDate, vacationDays);

    let numberOfHolidays = 1;
    let j = i;
    while (
      j < nonWeekendHolidays.length - 1 &&
      new Date(nonWeekendHolidays[j + 1].date) <= endDate
    ) {
      j++;
      numberOfHolidays++;
    }

    const numberOfAnnualLeaves = Math.max(
      vacationDays - numberOfHolidays - numberOfWeekends,
      0
    );

    const holidayRecommendation = {
      startDate,
      endDate,
      numberOfHolidays,
      numberOfWeekends,
      numberOfAnnualLeaves
    };
    holidayRecommendations.push(holidayRecommendation);
  }

  holidayRecommendations.sort(
    (a, b) => a.numberOfAnnualLeaves - b.numberOfAnnualLeaves
  );

  return holidayRecommendations;
};
