/*
    arnold-arboretum/
*/
import React from 'react'
import AttractionsContainer from '@/components/AttractionsContainer'
import getPark from '@/utils/getPark'

export default async function ArnArbHistory() {
	const pictures = [
		// Populate this array with your picture objects
		'/park_images/photo1.jpg',
		'/park_images/photo2.jpg',
		'/park_images/photo2.jpg',
		// ...more pictures
	]

	const text = (await getPark('arnold-arboretum')).history.description

	return (
		<AttractionsContainer
			park="arnold-arboretum"
			pictures={pictures}
			title="Arnold Arboretum"
			bodyText={text.first}
		/>
	)
}
