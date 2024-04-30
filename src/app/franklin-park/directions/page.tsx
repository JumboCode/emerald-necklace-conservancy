/*
    franklin-park/directions
*/
import React from 'react'
import withTimeout from '../../../components/Timeout'
import DirectionsContainer from '../../../components/DirectionsContainer'
import getPark from '@/utils/getPark'

async function FranklinParkDirections() {
	const park = await getPark('franklin-park')

	return (
		<DirectionsContainer
			parkURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188538.1571519035!2d-71.25562632717465!3d42.40838902516589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37bdfbdd36883%3A0xe5252a8c965e0ed6!2sFranklin%20Park!5e0!3m2!1sen!2sus!4v1712418341585!5m2!1sen!2sus"
			park={park}
		/>
	)
}

export default FranklinParkDirections
