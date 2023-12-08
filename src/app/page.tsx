'use client'
import React, { useState } from 'react';
import ParkName from '@/components/ParkName';
import MapPin from '@/components/MapPin';
import ParkNav from '../components/ParkNav';
import WelcomePage from '../components/WelcomePage';
import MapPage from './map/page';
import BackBayFensHistory from './back-bay-fens/page'


function App() {
  const [showMap, setShowMap] = useState(false);

  const handleWelcomePageClick = () => {
    setShowMap(true);
  }

  return (
    <>
      {showMap ? (
        <MapPage />
      ) : (
        <WelcomePage onWelcomePageClick={handleWelcomePageClick} />
      )}
    </>
  );
}

export default App;
