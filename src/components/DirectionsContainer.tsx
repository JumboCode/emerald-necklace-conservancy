'use client'
import React from 'react'
import ParkNav from './ParkNav'
import Image from 'next/image'
import background from '/public/directions_bg.png'
import { ParkT } from '@/types'
interface DirectionsContainerProps {
	parkURL: string
	park: ParkT
}
const DirectionsContainer: React.FC<DirectionsContainerProps> = ({
	parkURL,
	park,
}) => {
	function titleCaseWithSpaces(input: string): string {
		return input
			.split('-')
			.map(
				(word) =>
					word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
			) // Capitalize the first letter of each word
			.join(' ') // Rejoin the words with spaces
	}
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
			<ParkNav page={'Directions'} park={park.name} />
			<div className="flex flex-grow items-stretch justify-between w-full bg-custom-HistoryBackgroundGreen">
				<div className="absolute inset-0 z-0">
					<Image
						className="w-screen h-screen"
						src={background}
						alt="Splash Background"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-1/2 h-full flex justify-center items-center">
					<iframe
						className="w-full h-3/5 px-12"
						src={parkURL}
						frameBorder="0"
						loading="lazy"
					></iframe>
				</div>
				<div className="relative w-1/2 h-full flex flex-col space-y-8 text-center p-16 overflow-auto pt-32 text-[#567534] text-lg">
					<div>
						<h1 className="text-3xl pb-4">
							{titleCaseWithSpaces(park.name)}
						</h1>
						<p>{park.directions.general}</p>
					</div>
					<div>
						<h2 className="text-xl">By Walking</h2>
						<p>{park.directions.walking}</p>
					</div>
					<div>
						<h3 className="text-xl">By Driving</h3>
						<p>{park.directions.driving}</p>
					</div>
					<div>
						<h4 className="text-xl">By Transit</h4>
						<p>{park.directions.transit}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default DirectionsContainer
