import { addDays, getNonWeekendHolidays } from './holidayService';
import { getNumberOfWeekends, getPreviousWeekend } from './weekendService';

export const getHolidayRecommendations = (year, vacationDurationDays) => {
  const holidayRecommendations = [];
  const nonWeekendHolidays = getNonWeekendHolidays(year);

  for (let i = 0; i < nonWeekendHolidays.length; i++) {
    const holiday = nonWeekendHolidays[i];
    const currentDate = new Date(holiday.date);

    const startDate =
      currentDate.getDay() >= 3 ? currentDate : getPreviousWeekend(currentDate);
    const endDate = addDays(startDate, vacationDurationDays);

    const numberOfWeekends = getNumberOfWeekends(
      startDate,
      vacationDurationDays
    );

    let numberOfHolidays = 1;
    if (i < nonWeekendHolidays.length - 1) {
      while (
        new Date(nonWeekendHolidays[i + 1].date) <= endDate &&
        i < nonWeekendHolidays.length - 1
      ) {
        i++;
        numberOfHolidays++;
      }
    }

    const holidayRecommendation = {
      startDate: startDate,
      endDate: endDate,
      numberOfHolidays: numberOfHolidays,
      numberOfWeekends: numberOfWeekends,
      numberOfAnnualLeaves:
        vacationDurationDays - numberOfHolidays - numberOfWeekends
    };
    holidayRecommendations.push(holidayRecommendation);
  }

  holidayRecommendations.sort(
    (a, b) => a.numberOfAnnualLeaves - b.numberOfAnnualLeaves
  );

  return holidayRecommendations;
};
