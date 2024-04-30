/*
    arnold-arboretum/directions
*/

import React from 'react'
import withTimeout from '../../../components/Timeout'
import DirectionsContainer from '../../../components/DirectionsContainer'
import getPark from '@/utils/getPark'

async function ArnArbDirections() {
	const park = await getPark('arnold-arboretum')

	return (
		<DirectionsContainer
			parkURL="https://www.google.com/maps?q=Arnold+Arboretum+of+Harvard+University/@42.2979199,-71.1135626,14.18z&output=embed"
			park={park}
		/>
	)
}

export default ArnArbDirections
