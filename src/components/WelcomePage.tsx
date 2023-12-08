import React, { useState } from 'react';
import Logo from '../assets/new-enc-logo-300x144 1.png'
import Splash from '../assets/splashscreen 1.png'
import Image from 'next/image'
import MapPage from '@/app/map/page';
// Assume WelcomePage.js is in the same directory and exported as default
const WelcomePage = () => {
	const [animate, setAnimate] = useState(false);
  	const [isVisible, setIsVisible] = useState(true);

	const handleClick = () => {
		setAnimate(true)

		setTimeout(() => {
			setIsVisible(false);
		}, 450)
	}

	if (!isVisible) {
		return null
	}
	return (
		<div
		//   className="text-2xl w-full h-screen flex justify-center items-center bg-#FFFFFF cursor-pointer"
		onClick={handleClick}
		>
			<p>Park History and Attractions</p>
			<Image src={Splash} alt="Splash Background" style={{  position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}/>
			<p>Park History and Attractions</p>
			<Image src={Logo} alt="Logo" style={{ position: 'absolute', top: '10%', left: '10%', width: "20%", height: "20%"}}/>
			<h1 className="absolute top-45 left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-3xl" style={{position: "absolute", top: '32%', left: '19%', width: "20%", height: "20%"}}>Park History and Attractions</h1>
		</div>
	);
};

// MapPage component (for demonstration)
// const MapPage = () => {
// 	// Simple placeholder for the actual Map component
// 	return (
// 		<div>
// 			<p>Map</p>
// 			{/* <ParkModal
// 				title="Franklin Park"
// 				text="At 527 acres, Franklin Park is the largest park in the Emerald Necklace. Named for Benjamin Franklin, the park brings together rural scenery, spectacular rock outcroppings, a woodland preserve, expansive pastoral vistas and an area for active recreation and sports."
// 				url="/parks"
// 				open={true}
// 			/> */}
// 		</div>
// 	)
// }

// Home component that uses the WelcomePage

export default WelcomePage


/* ----------------------------------------------
 * Generated by Animista on 2023-11-19 13:5:15
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

