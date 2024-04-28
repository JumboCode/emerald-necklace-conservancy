'use client'

import React, { useState, useEffect} from 'react';
import Logo from '../assets/new-enc-logo-300x144 1.png'
import Splash from '../assets/splashscreen 1.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
  
const WelcomePage = () => {
	const router = useRouter()
    
	const handleClick = () => {
        router.push('/map')
	}

	return (
		<div
		className="text-2xl w-full h-screen flex justify-center items-center bg-#FFFFFF cursor-pointer"
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

export default WelcomePage

