/*
    arnold-arboretum/
*/
'use client'
import React from "react"
import ParkTitle from "@/components/ParkTitle"
import ParkNav from "@/components/ParkNav"
import Image from 'next/image'
import background from '/public/img/white_shapes.png'
import ImageList from '@/components/ParkImage'; // Make sure to import the new component
import { useEffect, useState } from 'react';

export default function ArnArbHistory() {
    const [scale, setScale] = useState(1);
    const pictures = [
        // Populate this array with your picture objects
        "/park_images/photo1.jpg",
        "/park_images/photo2.jpg",
        "/park_images/photo2.jpg",

        // ...more pictures
      ];
      

  useEffect(() => {
    const handleScroll = () => {
      // This is just a simple scaling factor. You may want to create a more
      // complex formula to control how the image stretches.
      const newScale = 1 + window.scrollY / 10000;

      // Update the scale state, which will update the image's style.
      setScale(newScale);
    };

    // Add event listener when the component mounts.
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts.
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <div className="bg-custom-HistoryBackgroundGreen">  
            <div class="parallax__fixed">
                <ParkNav page={"History"} park={"arnold-arboretum"}/>
            </div>

            <div id="group1" class="parallax parallax__group">
                <div class="parallax__layer parallax__layer--baseback">
                    <ParkTitle
                        title="Arnold Arboretum"
                        bodyText="Established in 1872, the Arnold Arboretum is open 
                                daily to the public as a free landscape for the study 
                                and enjoyment of trees, shrubs, and vines. 
                                As North America's first public arboretum and a 
                                National Historic Landmark, it is owned by the City 
                                of Boston and managed by Harvard University under a 
                                1,000-year lease signed in 1882.."
                    />
                </div>

                <div class="parallax__layer parallax__layer--back">
                    <div className="absolute top-20 w-full"> {/* Positioned ImageList */}
                        <ImageList images={pictures} />
                    </div>
                </div>
                
                <div class="parallax__layer parallax__layer--deep">
                    <Image src={background} alt="Splash Background" style={{
                        width: '100%',          // Ensures the image is full width.
                        transformOrigin: 'top', // Ensures the image scales from the top.
                        height: '100%'
                    }}/>
                </div>

                

                

                
            </div>
        </div>
    );
}