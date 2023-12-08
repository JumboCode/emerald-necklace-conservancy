'use client'
import React, { useState } from 'react';
import ParkName from '@/components/ParkName';
import MapPin from '@/components/MapPin';
import ParkNav from '../components/ParkNav';
import WelcomePage from '../components/WelcomePage';
import MapPage from './map/page';
import Background from '@/components/Background';

function App() {
  const [showMap, setShowMap] = useState(false);

  const handleWelcomePageClick = () => {
    setShowMap(true);
  }

  return (
    <>
      {showMap ? (
		<>
		<Background />
		</>
      ) : (
        <WelcomePage onWelcomePageClick={handleWelcomePageClick} />
      )}
    </>
  );
}

export default App;
