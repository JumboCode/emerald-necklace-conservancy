/*
    arnold-arboretum/directions
*/
'use client'

import React from "react";
import DirectionsContainer from '../../../components/DirectionsContainer'

export default function ArnArbDirections() {

    return (
      <DirectionsContainer parkURL="https://www.google.com/maps?q=Arnold+Arboretum+of+Harvard+University/@42.2979199,-71.1135626,14.18z&output=embed" parkName="arnold-arboretum"/>
    )
}
