import React from 'react'
import Image from 'next/image'
import AttractionCircle from '@/components/AttractionCircle'
import Placeholder from '@/assets/placeholder.webp'

interface Props {
	name: string
	text: string
	image: string
	number: number
	id: string
}

const Attraction: React.FC<Props> = ({ name, text, image, number, id }) => {
	const imageSrc = image ? require(image) : Placeholder
	return (
		<div id={id} className="flex justify-center flex-col h-screen ">
			<div className="flex flex-row">
				<div className="px-12 flex flex-col justify-center w-1/3">
					<AttractionCircle
						num={number}
						size={'large'}
						fontSize={'large'}
					/>
					<div className="inline-block bg-custom-yellow my-4 w-full">
						<h1 className="text-black text-xl font-questrial">
							{name}
						</h1>
					</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<Image src={imageSrc} alt="Attraction" height={400} />
				</div>
			</div>
			<div className="inline-block bg-black bg-opacity-50 text-white ml-12 w-3/4 mt-12">
				{text}
			</div>
		</div>
	)
}

export default Attraction
