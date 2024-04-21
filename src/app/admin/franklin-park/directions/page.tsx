import React from 'react'
import getPark from '@/utils/getPark'
import DirectionsPage from '@/components/admin/DirectionsPage'

interface Props {}

const Directions: React.FC<Props> = async ({}) => {
	const park = await getPark('franklin-park')

	return <DirectionsPage park={park} />
}

export default Directions
