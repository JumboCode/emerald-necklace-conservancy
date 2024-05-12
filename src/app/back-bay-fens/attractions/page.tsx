import React from 'react'
import getPark from '@/utils/getPark'
import AttractionsContainer from '@/components/AttractionsContainer'

async function BackBayFensAttns() {
	const park = await getPark('back-bay-fens')
	console.log(park)

	return <AttractionsContainer park={park} map={''} />
}

export default BackBayFensAttns
