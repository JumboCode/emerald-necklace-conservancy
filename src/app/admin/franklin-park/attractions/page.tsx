import React from 'react'
import Section from '@/components/admin/Section'

interface Props {}

const Attractions: React.FC<Props> = ({}) => {
	return (
		<div className="w-full bg-[#333333]">
			<div className="bg-enc-yellow w-full h-20 flex items-center pl-12">
				<h2 className="font-questrial text-2xl text-[#33333] text-light">
					Franklin Park — Attractions
				</h2>
			</div>
			<Section title="Attraction 1" />
			<Section title="Attraction 1" />
			<Section title="Attraction 1" />
			<Section title="Attraction 1" />
			<Section title="Attraction 1" />
		</div>
	)
}

export default Attractions
