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
    while (
      i < nonWeekendHolidays.length - 1 &&
      new Date(nonWeekendHolidays[i + 1].date) <= endDate
    ) {
      i++;
      numberOfHolidays++;
    }

    const numberOfAnnualLeaves =
      vacationDays - numberOfHolidays - numberOfWeekends;

    const holidayRecommendation = {
      startDate: startDate,
      endDate: endDate,
      numberOfHolidays: numberOfHolidays,
      numberOfWeekends: numberOfWeekends,
      numberOfAnnualLeaves: numberOfAnnualLeaves >= 0 ? numberOfAnnualLeaves : 0
    };
    holidayRecommendations.push(holidayRecommendation);
  }

  holidayRecommendations.sort(
    (a, b) => a.numberOfAnnualLeaves - b.numberOfAnnualLeaves
  );

  return holidayRecommendations;
};
