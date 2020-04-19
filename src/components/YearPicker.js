import React from 'react';

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
    <div>
      <label htmlFor="year">년도</label>
      <select name="year" onChange={handleChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>{' '}
      년
    </div>
  );
};

export default YearPicker;
