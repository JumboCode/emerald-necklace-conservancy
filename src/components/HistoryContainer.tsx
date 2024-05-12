'use client'

import React, { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import ParkTitle from '@/components/ParkTitle'
import ParkNav from '@/components/ParkNav'
import Image from 'next/image'
import background from '/public/img/white_shapes.png'
import ImageList from '@/components/ParkImage'
import withTimeout from '@/components/Timeout'
import { ParkT } from '@/types'

interface ParkTitleProps {
	park: ParkT
}

const HistoryContainer: React.FC<ParkTitleProps> = ({ park }) => {
	// Calculate height based on the number of pictures
	const height: number = park.history.images.length * 525 + 150

	// Screen component encapsulating the layout
	return (
		<div className="bg-custom-HistoryBackgroundGreen">
			<div className="parallax__fixed">
				<ParkNav page="History" park={park.slug} />
			</div>
			<div id="group1" className="parallax parallax__group">
				<div className="parallax__layer parallax__layer--baseback">
					<ParkTitle
						title={park.name}
						bodyText={park.history.description.first}
					/>
				</div>
				<div className="parallax__layer parallax__layer--back">
					<div className="absolute top-20 w-full">
						<ImageList images={park.history.images} />
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
				<div className="parallax__layer parallax__layer--baseback">
					<div className="absolute right-10 mt-10 ml-10">
						<div className="p-6 max-w-sm bg-custom-white rounded-lg">
							<p>{park.history.description.second}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

	// Conditional rendering based on the loading state
}

export default withTimeout(HistoryContainer)
