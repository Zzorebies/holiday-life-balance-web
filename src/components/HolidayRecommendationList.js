import React from 'react';

const HolidayRecommendationList = ({ holidayRecommendations }) => {
  const topFiveHolidayRecommendations =
    holidayRecommendations.length > 5
      ? holidayRecommendations.slice(0, 5)
      : holidayRecommendations;

  return (
    <div>
      <h4>
        홀라밸의 추천 휴가{' '}
        <span role="img" aria-label="airplane">
          ✈️
        </span>
      </h4>
      <ul>
        {topFiveHolidayRecommendations.map((holidayRecommendation, index) => {
          const {
            startDate,
            endDate,
            numberOfHolidays,
            numberOfWeekends,
            numberOfAnnualLeaves
          } = holidayRecommendation;
          return (
            <li key={index}>
              {`${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()} 
                공휴일 ${numberOfHolidays}일, 주말 ${numberOfWeekends}일, 연차 ${numberOfAnnualLeaves}일`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HolidayRecommendationList;
