
'use client'

import React from "react";
import ParkNav from "./ParkNav" 
import Image from 'next/image'
import background from '/public/img/white_shapes.png'

interface DirectionsContainerProps {
    parkURL: string;
    parkName: string;
}


const DirectionsContainer: React.FC<DirectionsContainerProps> = ({ parkURL, parkName }) => {
    
    function titleCaseWithSpaces(input: string): string {
        return input
            .split('-') 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
            .join(' '); // Rejoin the words with spaces
    }


	return (
        <div className="flex items-center justify-center min-h-screen h-screen w-screen bg-custom-HistoryBackgroundGreen z-0 ">
            <div className="absolute inset-0">
             <Image src={background} alt="Splash Background" className="absolute w-full h-full object-cover z-1" />
            </div>
            <div className="z-2">
                <div className="pt-64">
                <div>
                    <ParkNav page={"Directions"} park={parkName} />
                </div>
                <div className="relative w-1/2 h-screen float-left">
                    <div className="map-container">
                        <iframe
                            width="600"
                            height="450"
                            loading="lazy"
                            src={parkURL}>
                        </iframe>
                    </div>
                </div>
                <div className="relative w-1/2 h-screen float-right p-4 space-y-8">
                    <div>
                        <h1 className="text-xl">{titleCaseWithSpaces(parkName)}</h1>
                        <p>Franklin Park is located by the Charles River. Lorem ipsum.</p>
                    </div>
                    <div>
                        <h2 className="text-lg">By Walking</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div> 
                        <h3 className="text-lg">By Driving</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div>
                        <h4 className="text-lg">By Transit</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
            </div>
           
        </div>

	)
}

export default DirectionsContainer;