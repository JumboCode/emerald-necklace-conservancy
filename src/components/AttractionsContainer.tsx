'use client'
import React from "react"
import LoadingScreen from "@/components/LoadingScreen"
import ParkTitle from "@/components/ParkTitle"
import ParkNav from "@/components/ParkNav"
import Image from 'next/image'
import background from '/public/img/white_shapes.png'
import ImageList from '@/components/ParkImage'; // Make sure to import the new component
import { useEffect, useState } from 'react';

interface ParkTitleProps {
    park: string;
    bodyText: string;
    title: string;
    pictures: string[];
}

const AttractionsContainer: React.FC<ParkTitleProps> = ({ park, bodyText, title, pictures }) => {
    const [loading, setLoading] = useState(true); // Initialize loading state to true
      
    let height: number = (pictures.length * 525) + 150;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 500); 

        return () => {
            clearTimeout(timer); // Clean up the timer
        };
    }, []);

    return (
        <div className="bg-custom-HistoryBackgroundGreen ">
            {loading && <LoadingScreen />}
            {!loading && (
                <>
                    <div className="parallax__fixed">
                        <ParkNav page={"History"} park={park} />
                    </div>

                    <div id="group1" className="parallax parallax__group">
                        <div className="parallax__layer parallax__layer--baseback">
                            <ParkTitle
                                title={title}
                                bodyText={bodyText}
                            />
                        </div>

                        <div className="parallax__layer parallax__layer--back">
                            <div className="absolute top-20 w-full">
                                <ImageList images={pictures} />
                            </div>
                        </div>

                        <div className="parallax__layer parallax__layer--deep flex-grow">
                            <Image src={background} alt="Splash Background" style={{
                                width: '100%',
                                transformOrigin: 'top',
                                height: `${height}px`
                            }} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default AttractionsContainer;