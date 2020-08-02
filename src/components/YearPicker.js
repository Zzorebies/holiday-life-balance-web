import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    <FormControl>
      <InputLabel htmlFor="year" disableAnimation={true}>
        년도
      </InputLabel>
      <NativeSelect name="year" onChange={handleChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default YearPicker;
