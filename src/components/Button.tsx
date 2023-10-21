import { useState } from "react";

export default function MyButton(props) {
    const [temp, setTemp] = useState([]);
    const [forecast, setForecast] = useState([]);
    
    const handleClick = () => {
        fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
          .then((res) => res.json())
          .then((json) => {
            setTemp(json["properties"]["periods"][0]["temperature"]);
            setForecast(json["properties"]["periods"][0]["shortForecast"]);
          });
      };
    
    return (
        <div>
            <button onClick={handleClick} class="bg-green-300 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">{props.label}</button>
            <p class="text-center">Temperature: {temp}</p>
            <p class="text-center">Forecast: {forecast}</p>
        </div>
    )
}