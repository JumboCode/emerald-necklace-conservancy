/*
    olmsted-park/directions
*/


import React from "react";
import withTimeout from '../../../components/Timeout'
import DirectionsContainer from '../../../components/DirectionsContainer'
import getPark from '@/utils/getPark'

async function OlmstedParkDirections() {
	const park = await getPark('olmsted-park')
  
	return (
		<DirectionsContainer
			parkURL="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5899.567034869717!2d-71.1180102!3d42.3258159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3799e7cec8f07%3A0x23a597f711bb181f!2sOlmsted%20Park!5e0!3m2!1sen!2sus!4v1712418478173!5m2!1sen!2sus"
			park={park}
		/>
	)
}

export default withTimeout(OlmstedParkDirections)
