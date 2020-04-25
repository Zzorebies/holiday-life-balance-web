import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 5rem;

  label {
    padding-left: 0.5rem;
  }

  select {
    box-sizing: border-box;
    padding: 1px;
    border: 0.1rem solid ${(props) => props.theme.color.majorBrown};
    border-radius: 0;
  }
`;

const YearPicker = ({
  startingYear,
  maxNumberOfYears = 3,
  setSelectedYear
}) => {
  const years = [...Array(maxNumberOfYears).keys()].map(
    (n) => n + startingYear
  );

  const handleChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  return (
    <Container>
      <label htmlFor="year">년도</label>
      <div>
        <select name="year" onChange={handleChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>{' '}
        년
      </div>
    </Container>
  );
};

export default YearPicker;
