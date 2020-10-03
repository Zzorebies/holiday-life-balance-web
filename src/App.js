import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import HolidayForm from './components/HolidayForm';
import HolidayRecommendationListModal from './components/HolidayRecommendationListModal';

function App() {
  const [holidayRecommendations, setHolidayRecommendations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showRecommendations = (holidayRecommendations) => {
    setHolidayRecommendations(holidayRecommendations);
    setIsModalOpen(true);
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <HolidayForm showRecommendations={showRecommendations} />
        <HolidayRecommendationListModal
          isOpen={isModalOpen}
          handleClose={handleModalClose}
          holidayRecommendations={holidayRecommendations}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;
