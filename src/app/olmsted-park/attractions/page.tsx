import React from 'react'
import getPark from '@/utils/getPark'
import AttractionsContainer from '@/components/AttractionsContainer'

async function OlmstedAttractions() {
	const park = await getPark('olmsted-park')

	return <AttractionsContainer park={park} map={''} />
}

export default OlmstedAttractions
