/*
    back-bay-fens/
*/
import React from 'react'
import AttractionsContainer from '@/components/AttractionsContainer'
import getPark from '@/utils/getPark'

export default async function BackBayFensHistory() {
	const pictures = [
		// Populate this array with your picture objects
		'/park_images/photo1.jpg',
		'/park_images/photo2.jpg',
		'/park_images/photo2.jpg',
		// ...more pictures
	]

	const text = (await getPark('back-bay-fens')).history.description

	return (
		<AttractionsContainer
			park="back-bay-fens"
			pictures={pictures}
			title="Back Bay"
			bodyText={text.first}
		/>
	)
}
