import React, { useState } from 'react';

const VacationDaysInput = ({ vacationDays, setVacationDays }) => {
  const [error, setError] = useState(null);

  const handleChange = e => {
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
    <div>
      <label htmlFor="vacation-days">휴가 기간</label>
      <input
        type="number"
        name="vacation-days"
        onChange={handleChange}
        value={vacationDays}
      />{' '}
      일{error && <p>{error}</p>}
    </div>
  );
};

export default VacationDaysInput;
