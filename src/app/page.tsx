/*
	Import the button from 'components/Button.tsx'
	Render the button below the h1 tag, passing it the appropriate props
*/

"use client";
import WeatherButton from "@/components/Button";

export default function Home() {
	return (
		<div>
			{
				// <h1>Emerald Necklace Button</h1>
				<h1>
					<WeatherButton className="button" label="Weather is awesome!" />
				</h1>

				
				
			}
		</div>
	);
}
