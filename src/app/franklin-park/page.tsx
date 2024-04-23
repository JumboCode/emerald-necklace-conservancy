/*
    franklin-park/
*/
'use client'
import React from "react"
import ParkTitle from "@/components/ParkTitle"
import AttractionsContainer from '@/components/AttractionsContainer'

export default function FraParkHistory() {
    const pictures = [
        // Populate this array with your picture objects
        "/park_images/photo1.jpg",
        "/park_images/photo2.jpg",
        "/park_images/photo2.jpg",
        // ...more pictures
      ];

    return (
        <AttractionsContainer 
            park="franklin-park" 
            pictures={pictures} 
            title="Franklin Park" 
            bodyText="Established in 1872, the Arnold Arboretum is open daily 
                      to the public as a free landscape for the study and 
                      enjoyment of trees, shrubs, and vines. As North America's 
                      first public arboretum and a National Historic Landmark, 
                      it is owned by the City of Boston and managed by Harvard 
                      University under a 1,000-year lease signed in 1882."
        />
    );
}