import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

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
    <div>
      <TextField
        label="휴가 기간 (일)"
        name="vacation-days"
        type="number"
        value={vacationDays}
        onChange={handleChange}
        fullWidth={true}
        InputLabelProps={{
          shrink: true
        }}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default VacationDaysInput;
