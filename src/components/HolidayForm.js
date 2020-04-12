import React, { useState } from 'react';

import YearPicker from './YearPicker';
import VacationDaysInput from './VacationDaysInput';
import HolidayRecommendationList from './HolidayRecommendationList';
import { getHolidayRecommendations } from '../holidayRecommendationService';

const HolidayForm = () => {
  const currentYear = new Date().getFullYear();
  const defaultVacationDays = 5;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [vacationDays, setVacationDays] = useState(defaultVacationDays);
  const [holidayRecommendations, setHolidayRecommendations] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    setHolidayRecommendations(
      getHolidayRecommendations(selectedYear, vacationDays)
    );
  };

  return (
    <div>
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
      <HolidayRecommendationList
        holidayRecommendations={holidayRecommendations}
      />
    </div>
  );
};

export default HolidayForm;
