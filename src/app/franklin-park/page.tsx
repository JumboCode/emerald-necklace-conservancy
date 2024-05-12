/*
    franklin-park/
*/
import React from 'react'
import withTimeout from '../../components/Timeout'
import ParkTitle from '@/components/ParkTitle'
import HistoryContainer from '@/components/HistoryContainer'
import getPark from '@/utils/getPark'

async function FraParkHistory() {
	const pictures = [
		// Populate this array with your picture objects
		'/park_images/photo1.jpg',
		'/park_images/photo2.jpg',
		'/park_images/photo2.jpg',
		// ...more pictures
	]

	const park = await getPark('franklin-park')

	return <HistoryContainer park={park} />
}

export default FraParkHistory
