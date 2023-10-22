"use client";

import { useState } from "react";



export default function Button(props:any) {
    const [periods, setWeather] = useState([]);
    const [name, setName] = useState([]);
    // const [periods, setWeather] = useState([]);

    const handleClick = () => {
        fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
        .then((res) => res.json())
        .then((json) => {
            setWeather(json.properties.periods);            
        });
    };
    
      return (
        <div>
          <button onClick={handleClick}>{props.label}</button>
          {periods.map((period) => (
            <div key={period['name']}>
              <p>{period['name']}</p>
              <i>{period['temperature']}{period['temperatureUnit']}</i>
              <p>{period['shortForecast']}</p>
              <br></br>
            </div>
          ))}
        </div>
      );
    }