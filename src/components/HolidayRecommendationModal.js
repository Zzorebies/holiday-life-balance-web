import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import StyledModal from './StyledModal';
import HolidayRecommendationList from './HolidayRecommendationList';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HolidayRecommendationModal = ({
  isOpen,
  handleClose,
  holidayRecommendations
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={handleClose}
    >
      <HolidayRecommendationList
        holidayRecommendations={holidayRecommendations}
      />
      <ButtonContainer>
        <Button onClick={handleClose}>닫기</Button>
      </ButtonContainer>
    </StyledModal>
  );
};

export default HolidayRecommendationModal;
