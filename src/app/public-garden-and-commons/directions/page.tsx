/*
    public-garden-and-commons/directions
*/
'use client'

import React from "react";
import withTimeout from '../../../components/Timeout'
import DirectionsContainer from '../../../components/DirectionsContainer'

export function PubGardenDirections() {
	
	return (
		<DirectionsContainer parkURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4586471565885!2d-71.07266702389103!3d42.35406387119334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709e822b60bb%3A0xcbd77f0b5e16e701!2sPublic%20Garden!5e0!3m2!1sen!2sus!4v1712418608946!5m2!1sen!2sus" parkName="public-garden-and-commons"/>
	)
}

export default withTimeout(PubGardenDirections)
