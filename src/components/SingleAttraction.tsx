'use client'
import React from 'react'
import AttractionCircle from '@/components/AttractionCircle'

interface NumberAttractionProps {
	number: number
	image: string
}
const SingleAttraction: React.FC<NumberAttractionProps> = ({
	number,
	image,
}) => {
	return (
		<div className="flex items-center">
			<AttractionCircle num={number} size={'small'} fontSize={'small'} />
			{/* <img src={image} alt="attraction" className="w-20 h-10 object-cover ml-2" /> */}
		</div>
	)
}
export default SingleAttraction
