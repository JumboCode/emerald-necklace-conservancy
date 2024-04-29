/*
    olmsted-park/
*/
import React from 'react'
import AttractionsContainer from '@/components/AttractionsContainer'
import getPark from '@/utils/getPark'

export default async function OlmsteadHist() {
	const pictures = [
		// Populate this array with your picture objects
		'/park_images/photo1.jpg',
		'/park_images/photo2.jpg',
		'/park_images/photo2.jpg',
		// ...more pictures
	]

	const text = (await getPark('olmsted-park')).history.description

	return (
		<AttractionsContainer
			park="olmsted-park"
			pictures={pictures}
			title="Olmsted Park"
			bodyText={text.first}
		/>
	)
}
