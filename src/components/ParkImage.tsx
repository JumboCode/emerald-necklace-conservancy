import React from 'react'
import ParkTitle from '@/components/ParkTitle'
import Image from 'next/image'

function splitStringByLength(str: string, length: number): string[] {
	let result: string[] = []
	for (let i = 0; i < str.length; i += length) {
		result.push(str.substring(i, i + length))
	}
	return result
}

type ImageListProps = {
	images: string[] // Array of image URLs
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
	return (
		<div>
			{images.map((image, index) => (
				<>
					<div
						key={index}
						className={`flex ${
							index % 2 === 1
								? 'justify-start pl-10'
								: 'justify-end pr-10'
						}`}
					>
						<Image
							src={
								image === '' ? '@/img/placeholder.webp' : image
							}
							width={400}
							height={300}
							alt={`Image ${index}`}
							className={`my-4 max-h-60 ${
								index % 2 === 1
									? 'border-b-8 border-l-8 border-custom-NavBarGreen' // Left side, bottom-left border
									: 'border-b-8 border-r-8 border-custom-NavBarGreen' // Right side, bottom-right border
							}`}
						/>
					</div>
					<div
						key={index}
						className={`flex ${
							index % 2 === 0
								? 'justify-start pl-10'
								: 'justify-end pr-10'
						}`}
					></div>
				</>
			))}
		</div>
	)
}

export default ImageList
