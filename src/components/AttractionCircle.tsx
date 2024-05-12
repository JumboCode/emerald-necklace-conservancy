'use client' // Code for one of the attraction circles on the attractions pages
import React from 'react'

interface AttractionCircleProps {
	num: number
	size: 'small' | 'large' // Determine if circle is used on map or to display info.
	fontSize: 'small' | 'large'
}

const AttractionCircle: React.FC<AttractionCircleProps> = ({
	num,
	size,
	fontSize,
}) => {
	const circleSize = size === 'large' ? '100px' : '48px'
	const fSize = fontSize === 'large' ? '48px' : '16px'

	return (
		<div
			className="bg-custom-yellow w-12 h-12 rounded-full flex justify-center items-center"
			style={{ height: circleSize, width: circleSize }}
		>
			<h1
				className="text-black text-xl font-questrial"
				style={{ fontSize: fSize }}
			>
				{num}
			</h1>
		</div>
	)
}

export default AttractionCircle
