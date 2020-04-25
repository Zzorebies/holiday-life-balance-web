import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 5rem;

  label {
    padding-left: 0.5rem;
  }

  input {
    box-sizing: border-box;
    max-width: 7rem;
    padding: 0.4rem;
    border: 0.1rem solid ${(props) => props.theme.color.majorBrown};
    border-radius: 0;
  }
`;

const VacationDaysInput = ({ vacationDays, setVacationDays }) => {
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = Number(e.target.value);

    if (value >= 30) {
      setError('너무 하시는 거 아닌가요? 😨');
    } else if (value <= 0) {
      setError('1 이상의 숫자를 입력해 주세요. 😊');
    } else {
      setError(null);
    }

    setVacationDays(value);
  };

  return (
    <Container>
      <label htmlFor="vacation-days">휴가 기간</label>
      <div>
        <input
          type="number"
          name="vacation-days"
          onChange={handleChange}
          value={vacationDays}
        />{' '}
        일{error && <p>{error}</p>}
      </div>
    </Container>
  );
};

export default VacationDaysInput;
