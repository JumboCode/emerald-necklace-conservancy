/*
    jamaica-pond/directions
*/

import React from 'react'
import DirectionsContainer from '../../../components/DirectionsContainer'
import getPark from '@/utils/getPark'

export default async function JamaicaPondDirections() {
	const park = await getPark('jamaica-pond')

	return (
		<DirectionsContainer
			parkURL="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5900.304370421108!2d-71.1227241!3d42.3179527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37972d7e1f32f%3A0xe9a09aa5e0f6c616!2sJamaica%20Pond!5e0!3m2!1sen!2sus!4v1712418431858!5m2!1sen!2sus"
			park={park}
		/>
	)
}
