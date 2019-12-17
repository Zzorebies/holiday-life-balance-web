import React, { useState } from 'react';

import YearPicker from './YearPicker';
import VacationDaysInput from './VacationDaysInput';

const HolidayForm = () => {
  const currentYear = new Date().getFullYear();
  const defaultVacationDays = 5;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [vacationDays, setVacationDays] = useState(defaultVacationDays);

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: Perform calculation and remove console.logs
    console.log(selectedYear);
    console.log(vacationDays);
  };

  return (
    <form onSubmit={handleSubmit}>
      <YearPicker
        setSelectedYear={setSelectedYear}
        startingYear={currentYear}
      />
      <VacationDaysInput
        vacationDays={vacationDays}
        setVacationDays={setVacationDays}
      />
      <button>언제가 좋을까?</button>
    </form>
  );
};

export default HolidayForm;
