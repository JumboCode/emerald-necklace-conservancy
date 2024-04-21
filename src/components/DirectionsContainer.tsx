'use client';

import React from "react";
import ParkNav from "./ParkNav";
import Image from 'next/image';
import background from '/public/directions_bg.png';

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
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
            <ParkNav page={"Directions"} park={parkName} />
            <div className="flex flex-grow items-stretch justify-between w-full bg-custom-HistoryBackgroundGreen">
                <div className="absolute inset-0 z-0">
                    <Image className="w-screen h-screen" src={background} alt="Splash Background" layout="fill" objectFit="cover" />
                </div>
                <div className="relative w-1/2 h-full flex justify-center items-center">
                    <iframe
                        className="w-1/2 h-3/4"
                        src={parkURL}
                        frameBorder="0"
                        loading="lazy">
                    </iframe>
                </div>
                <div className="relative w-1/2 h-full flex flex-col space-y-8 text-center p-16 overflow-auto pt-40 text-[#567534] text-lg">
                    <div>
                        <h1 className="text-3xl pb-4">{titleCaseWithSpaces(parkName)}</h1>
                        <p>Franklin Park is located by the Charles River. Lorem ipsum.</p>
                    </div>
                    <div>
                        <h2 className="text-xl">By Walking</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h3 className="text-xl">By Driving</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h4 className="text-xl">By Transit</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DirectionsContainer;
