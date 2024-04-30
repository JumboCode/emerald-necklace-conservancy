/*
    franklin-park/
*/
import React from 'react'
import withTimeout from '../../components/Timeout'
import ParkTitle from '@/components/ParkTitle'
import AttractionsContainer from '@/components/AttractionsContainer'
import getPark from '@/utils/getPark'

async function FraParkHistory() {
	const pictures = [
		// Populate this array with your picture objects
		'/park_images/photo1.jpg',
		'/park_images/photo2.jpg',
		'/park_images/photo2.jpg',
		// ...more pictures
	]

	const text = (await getPark('franklin-park')).history.description

	return (
		<AttractionsContainer
			park="franklin-park"
			pictures={pictures}
			title="Franklin Park"
			bodyText={text.first}
		/>
	)
}

export default FraParkHistory
