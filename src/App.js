import React, { useState } from 'react';

import Header from './components/Header';
import HolidayForm from './components/HolidayForm';
import HolidayRecommendationModal from './components/HolidayRecommendationModal';

function App() {
  const [holidayRecommendations, setHolidayRecommendations] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showRecommendations = (holidayRecommendations) => {
    setHolidayRecommendations(holidayRecommendations);
    setModalIsOpen(true);
  };

  const handleClose = () => setModalIsOpen(false);

  return (
    <div>
      <Header />
      <HolidayForm showRecommendations={showRecommendations} />
      <HolidayRecommendationModal
        isOpen={modalIsOpen}
        handleClose={handleClose}
        holidayRecommendations={holidayRecommendations}
      />
    </div>
  );
}

export default App;
