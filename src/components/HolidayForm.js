import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { getHolidayRecommendations } from '../services/holidayRecommendationService';
import VacationDaysInput from './VacationDaysInput';
import YearPicker from './YearPicker';

const HolidayForm = ({ className, setHolidayRecommendations }) => {
  const currentYear = new Date().getFullYear();
  const defaultVacationDays = 5;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [vacationDays, setVacationDays] = useState(defaultVacationDays);

  const handleSubmit = (e) => {
    e.preventDefault();

    setHolidayRecommendations(
      getHolidayRecommendations(selectedYear, vacationDays)
    );
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="center-form">
        <YearPicker
          setSelectedYear={setSelectedYear}
          startingYear={currentYear}
        />
        <VacationDaysInput
          vacationDays={vacationDays}
          setVacationDays={setVacationDays}
        />
        <Button type="submit" variant="outlined">
          언제가 좋을까?
        </Button>
      </div>
    </form>
  );
};

const StyledHolidayForm = styled(HolidayForm)`
  color: ${(props) => props.theme.color.majorBrown};

  .center-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    margin: 0 auto;
    > * {
      margin: 0.75rem 0rem;
      width: 100%;
      max-width: 15rem;
    }

    ${(props) => props.theme.media.tablet} {
      flex-direction: row;
      > * {
        margin: 0rem 0.75rem;
      }
    }
  }
`;

export default StyledHolidayForm;
