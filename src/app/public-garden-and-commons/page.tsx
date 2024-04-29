/*
    public-garden-and-commons/
*/
'use client'
import React from "react"
import withTimeout from '../../components/Timeout'
import AttractionsContainer from '@/components/AttractionsContainer'

export function PubGarComHistory() {
    const pictures = [
        // Populate this array with your picture objects
        "/park_images/photo1.jpg",
        "/park_images/photo2.jpg",
        "/park_images/photo2.jpg",
        // ...more pictures
      ];

    return (
        <AttractionsContainer 
            park="public-garden-and-commons" 
            pictures={pictures} 
            title="Public Garden and Commons" 
            bodyText="Established in 1872, the Arnold Arboretum is open daily 
                      to the public as a free landscape for the study and 
                      enjoyment of trees, shrubs, and vines. As North America's 
                      first public arboretum and a National Historic Landmark, 
                      it is owned by the City of Boston and managed by Harvard 
                      University under a 1,000-year lease signed in 1882."
        />
    );
}

export default withTimeout(PubGarComHistory)