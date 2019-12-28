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

export const isWeekend = date => date.getDay() === 6 || date.getDay() === 0;
