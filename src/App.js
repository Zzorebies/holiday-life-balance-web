import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import HolidayForm from './components/HolidayForm';
import HolidayRecommendationList from './components/HolidayRecommendationList';

function App() {
  const [holidayRecommendations, setHolidayRecommendations] = useState([]);

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <HolidayForm setHolidayRecommendations={setHolidayRecommendations} />
        <HolidayRecommendationList
          holidayRecommendations={holidayRecommendations}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;
