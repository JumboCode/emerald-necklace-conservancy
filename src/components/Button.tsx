/* import { Hanken_Grotesk } from "next/font/google";
import { useState } from "react"

export default function WeatherButton(props) {
    const [unit, setUnit] = useState([])
    const [temperature, setTemp] = useState([])
    const [shortForecast, setForecast] = useState([])


	const handleClick = () => {
		fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setTemp(json["properties"]["periods"][0]["temperature"])
				setForecast(json["properties"]["periods"][0]["shortForecast"])
                setUnit(json["properties"]["periods"][0]["temperatureUnit"])
			});
	}

    return (
        <div>
            <p onClick={handleClick} className="button">{props.label}</p>
            <p className="text-center">{temperature} {unit}</p>
            <p className="text-center">{shortForecast}</p>
        </div>
    )

} */