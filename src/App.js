import React, { useState } from 'react';

import Header from './components/Header';
import HolidayForm from './components/HolidayForm';
import HolidayRecommendationList from './components/HolidayRecommendationList';

function App() {
  const [holidayRecommendations, setHolidayRecommendations] = useState([]);

  return (
    <div>
      <Header />
      <HolidayForm setHolidayRecommendations={setHolidayRecommendations} />
      <HolidayRecommendationList
        holidayRecommendations={holidayRecommendations}
      />
    </div>
  );
}

export default App;
