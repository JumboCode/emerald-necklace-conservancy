'use client'

import React, { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import ParkTitle from '@/components/ParkTitle'
import ParkNav from '@/components/ParkNav'
import Image from 'next/image'
import background from '/public/img/white_shapes.png'
import ImageList from '@/components/ParkImage'

interface ParkTitleProps {
	park: string
	bodyText: string
	title: string
	pictures: string[]
}

const AttractionsContainer: React.FC<ParkTitleProps> = ({
	park,
	bodyText,
	title,
	pictures,
}) => {
	const [loading, setLoading] = useState(true)

	// Calculate height based on the number of pictures
	const height: number = pictures.length * 525 + 150

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1250)

		// Clean up the timer on component unmount
		return () => clearTimeout(timer)
	}, [])

	// Screen component encapsulating the layout
	const Screen = () => (
		<div className="bg-custom-HistoryBackgroundGreen">
			<div className="parallax__fixed">
				<ParkNav page="History" park={park} />
			</div>
			<div id="group1" className="parallax parallax__group">
				<div className="parallax__layer parallax__layer--baseback">
					<ParkTitle title={title} bodyText={bodyText} />
				</div>
				<div className="parallax__layer parallax__layer--back">
					<div className="absolute top-20 w-full">
						<ImageList images={pictures} />
					</div>
				</div>
				<div className="parallax__layer parallax__layer--deep flex-grow">
					<Image
						src={background}
						alt="Splash Background"
						style={{
							width: '100%',
							transformOrigin: 'top',
							height: `${height}px`,
						}}
					/>
				</div>
			</div>
		</div>
	)

	// Conditional rendering based on the loading state
	return loading ? <LoadingScreen /> : <Screen />
}

export default AttractionsContainer
