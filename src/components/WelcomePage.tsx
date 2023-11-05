import React, { useState } from 'react';

// Assume WelcomePage.js is in the same directory and exported as default
const WelcomePage = ({ onStart }) => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-gray-100 cursor-pointer"
      onClick={onStart}
    >
      <h1 className="text-4xl md:text-6xl text-center text-gray-800">Tap Anywhere to Start</h1>
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