import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5rem'
  },
  modalBody: {
    padding: '1rem',
    backgroundColor: '#fff'
  }
}));

const HolidayRecommendationListModal = ({
  isOpen,
  handleClose,
  holidayRecommendations
}) => {
  const classes = useStyles();

  const topFiveHolidayRecommendations =
    holidayRecommendations.length > 5
      ? holidayRecommendations.slice(0, 5)
      : holidayRecommendations;

  return (
    <Modal open={isOpen} onClose={handleClose} className={classes.modal}>
      <div className={classes.modalBody}>
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
    </Modal>
  );
};

export default HolidayRecommendationListModal;
