// 'use client'
// import { useClient } from 'next/server';
// import { useState, useEffect } from 'react';
// import Button from '../components/Button';

// export default function Page() {
//   const [data, setData] = useState<any>(null);
//   const url =
//     "https://api.weatherbit.io/v2.0/current?city=Boston%2CMA&country=US&units=I&key=c4dce7178caf4937b88279dfa5d0a097y=";

//   const fetchData = async () => {
//     try {
//       console.log('fetchData function called');
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error(`Network response was not ok (Status: ${response.status})`);
//       }

//       const jsonData = await response.json();
//       setData(jsonData);

//       console.log('Data updated:', jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Initial data fetch
//   }, []);

//   let temperatureDisplay = null;
//   let timeDisplay = null;

//   if (data && data.data) {
//     const curr_weather = JSON.stringify(data.data);
//     const dataArray = JSON.parse(curr_weather);
//     const temperature = dataArray[0].app_temp;
//     const time = dataArray[0].ob_time;

//     timeDisplay = <h3>Time: {time}</h3>;
//     temperatureDisplay = <h3>Temperature: {temperature}&deg;F</h3>;
//   }

//   return (
//     <div className = "text-slate-500">
//       <br />
//       <div className="text-xl font-medium text-black">
//         <h1>Weather in Medford, Massachusetts</h1>
//       </div>
//       <br />
//       <Button onClick={fetchData}>Click for Weather</Button>
//       {timeDisplay}
//       {temperatureDisplay}
//     </div>
//   );
// }

'use client'
import { useClient } from 'next/server';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import './globals.css'
export default function Page() {
  const [data, setData] = useState(null);
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const url = 'https://api.weather.gov/gridpoints/BOX/69,92/forecast'; 

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
	  console.log('fetchData function was called.');

      if (jsonData && jsonData.properties && jsonData.properties.periods && jsonData.properties.periods.length > 0) {
        const period = jsonData.properties.periods[0];
        setCurrentTemperature(`${period.temperature} ${period.temperatureUnit}`);
        setCurrentWeather(period.shortForecast);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className= "text-xl font-medium text-grey">
      <br />
      <div className = "text-slate-500">
        <h1>Weather in Medford, Massachusetts</h1>
      </div>
      <br />
      <Button className =  "text-xl font-medium text-pink" onClick={fetchData}>Click for Weather</Button>
      <h3>Temperature: {currentTemperature}</h3>
      <p>{currentWeather}</p>
    </div>
  );
}
