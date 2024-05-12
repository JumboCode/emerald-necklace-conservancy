import React from 'react'
import getPark from '@/utils/getPark'
import AttractionsContainer from '@/components/AttractionsContainer'

async function RiverwayAttns() {
	const park = await getPark('riverway')

	return <AttractionsContainer park={park} map={''} />
}

export default RiverwayAttns
