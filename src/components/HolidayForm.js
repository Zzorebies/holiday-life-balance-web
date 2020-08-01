import React, { useState } from 'react';
import styled from 'styled-components';

import YearPicker from './YearPicker';
import VacationDaysInput from './VacationDaysInput';
import Button from './Button';
import { getHolidayRecommendations } from '../services/holidayRecommendationService';

const HolidayForm = ({ className, showRecommendations }) => {
  const currentYear = new Date().getFullYear();
  const defaultVacationDays = 5;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [vacationDays, setVacationDays] = useState(defaultVacationDays);

  const handleSubmit = (e) => {
    e.preventDefault();

    showRecommendations(getHolidayRecommendations(selectedYear, vacationDays));
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="center-form">
        <div className="inputs-container">
          <YearPicker
            setSelectedYear={setSelectedYear}
            startingYear={currentYear}
          />
          <VacationDaysInput
            vacationDays={vacationDays}
            setVacationDays={setVacationDays}
          />
        </div>
        <div className="button-container">
          <Button>언제가 좋을까?</Button>
        </div>
      </div>
    </form>
  );
};

const StyledHolidayForm = styled(HolidayForm)`
  color: ${(props) => props.theme.color.majorBrown};

  .center-form {
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;

    ${(props) => props.theme.media.tablet} {
      flex-flow: row;
      width: 70%;
    }

    ${(props) => props.theme.media.desktop} {
      width: 60%;
    }
  }

  .inputs-container {
    width: 80%;
    display: inline-flex;
    flex: 1 1;
    justify-content: space-between;
    margin-bottom: 2rem;

    ${(props) => props.theme.media.tablet} {
      margin-bottom: 0;
      max-width: 40%;
      padding: 0;
      flex-flow: row;
    }
  }

  .button-container {
    width: 70%;
    padding: 2rem 0;
    display: flex;
    flex: 1 1;
    justify-content: flex-end;

    ${(props) => props.theme.media.desktop} {
      justify-content: center;
    }
  }
`;

export default StyledHolidayForm;
