import React, { useState } from 'react';

// Assume WelcomePage.js is in the same directory and exported as default
const WelcomePage = ({ onStart }) => {
  return (
    <div
      className="text-2xl w-full h-screen flex justify-center items-center bg-#FFFFFF cursor-pointer"
      onClick={onStart}
    >
      <img src="logo.png" alt="Logo" style={{ width: '20%', position: 'relative', top: '-100px' }} />
      <h1 className="absolute top-45 left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-3xl">Park History and Attractions</h1>
      <h1 className="absolute bottom-28 text-3xl left-1/2 transform -translate-x-1/2 text-center text-gray-800">Tap Anywhere to Start</h1>
    </div>
  );
};

// MapPage component (for demonstration)
const MapPage = () => {
  // Simple placeholder for the actual Map component
  return <div><p>Map</p></div>;
};

// Home component that uses the WelcomePage
const Home = () => {
  // State hook to manage whether the map is shown or not
  const [showMap, setShowMap] = useState(false);

  // Event handler to change the state when the welcome page is clicked
  const handleStart = () => {
    setShowMap(true); // Update the state to show the map
  };

  // Conditional rendering based on the state of `showMap`
  return showMap ? <MapPage /> : <WelcomePage onStart={handleStart} />;
};

export default Home;