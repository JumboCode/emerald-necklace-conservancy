import React from 'react'
import getPark from '@/utils/getPark'
import AttractionsContainer from '@/components/AttractionsContainer'

async function ArnArbAttractions() {
	const park = await getPark('arnold-arboretum')

	return <AttractionsContainer park={park} map={''} />
}

export default ArnArbAttractions
