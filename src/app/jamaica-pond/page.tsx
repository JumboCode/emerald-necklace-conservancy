/*
    arnold-arboretum/
*/
import withTimeout from '../../components/Timeout'
import React from 'react'
import AttractionsContainer from '@/components/AttractionsContainer'
import getPark from '@/utils/getPark'

async function JamaicaPondHist() {
	const pictures = [
		// Populate this array with your picture objects
		'/park_images/photo1.jpg',
		'/park_images/photo2.jpg',
		'/park_images/photo2.jpg',
		// ...more pictures
	]

	const text = (await getPark('jamaica-pond')).history.description

	return (
		<AttractionsContainer
			park="jamaica-pond"
			pictures={pictures}
			title="Jamaica Pond"
			bodyText={text.first}
		/>
	)
}

export default JamaicaPondHist
