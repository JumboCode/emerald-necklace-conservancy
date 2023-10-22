"use client"
import React, { useState } from 'react';

interface ButtonProps {
  label: string;
}

export default function Button ({ label }) {
  const [weatherData, setWeatherData] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.weather.gov/gridpoints/BOX/69,92/forecast');
      const data = await response.json();
      const currentTemperature = data.properties.periods[0].temperature;
      const currentWeather = data.properties.periods[0].shortForecast;
      const updatedLabel = `Temperature: ${currentTemperature}°F, Weather: ${currentWeather}`;
      setWeatherData(updatedLabel);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <button
        onClick={fetchData}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {label}
      </button>
      <p>{weatherData}</p>
    </div>
  );
};
