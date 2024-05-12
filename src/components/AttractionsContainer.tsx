'use client'
import React from 'react'
import withTimeout from '@/components/Timeout'
import Attraction from './Attraction'
import ParkNav from '@/components/ParkNav'
import { AttractionT, ParkT } from '@/types'

interface Props {
	park: ParkT
}

const AttractionsContainer: React.FC<Props> = ({ park }) => {
	return (
		<div className="bg-custom-HistoryBackgroundGreen h-full w-full">
			<div className="justify-center items-center">
				<ParkNav page={'Attractions'} park={'arnold-arboretum'} />

				<div className="h-screen">
					<p>MAP</p>
				</div>

				<p className="text-white font-orelega text-6xl ml-10 mb-20">
					Arnold Arboretum
				</p>

				{park.attractions.map((attraction, index) => (
					<Attraction
						key={index}
						name={attraction.name}
						number={attraction.number}
						text={attraction.description}
						image={attraction.image}
						id={index.toString()}
					/>
				))}
			</div>
		</div>
	)
}

export default withTimeout(AttractionsContainer)
