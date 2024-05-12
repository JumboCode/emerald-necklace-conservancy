import React from 'react'
import getPark from '@/utils/getPark'
import AttractionsContainer from '@/components/AttractionsContainer'

async function FranklinParkAttns() {
	const park = await getPark('franklin-park')

	return <AttractionsContainer park={park} map={''} />
}

export default FranklinParkAttns
