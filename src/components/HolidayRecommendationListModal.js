import React from 'react';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;

  .modal-body {
    background-color: ${(props) => props.theme.color.white};
    padding: 1rem;
  }

  .modal-top-bar {
    text-align: right;
    margin-bottom: -1rem;
    span {
      cursor: pointer;
    }
  }
`;

const HolidayRecommendationListModal = ({
  className,
  isOpen,
  handleClose,
  holidayRecommendations
}) => {
  const topFiveHolidayRecommendations = holidayRecommendations.slice(0, 5);

  return (
    <StyledModal open={isOpen} onClose={handleClose} className={className}>
      <div className="modal-body">
        <div className="modal-top-bar">
          <span role="img" aria-label="close-button" onClick={handleClose}>
            ✕
          </span>
        </div>
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
    </StyledModal>
  );
};

export default HolidayRecommendationListModal;
