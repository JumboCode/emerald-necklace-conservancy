'use client'

import React, { useEffect, useState } from 'react'
import Section, { SectionWithTitle } from '@/components/admin/Section'
import { ParkT, AttractionT } from '@/types'
import updateAttractions from '@/actions/updateAttractions'
import Status from '@/components/admin/Status'
import Title from '@/components/admin/Title'
import MenuBar from '@/components/admin/MenuBar'

interface Props {
	park: ParkT
}

const AttractionPage: React.FC<Props> = ({ park }) => {
	const [saving, setSaving] = useState(false)
	const [attractions, setAttractions] = useState<AttractionT[]>(
		park.attractions
	)

	const save = (formData: FormData) => {
		console.log('save')

		const allAttractions: AttractionT[] = []
		for (let i = 0; i < attractions.length; i++) {
			const newAttraction: AttractionT = {
				number: i + 1,
				name: formData.get(getIdTitle(attractions[i])) as string,
				description: formData.get(getId(attractions[i])) as string,
				image: attractions[i].image,
			}

			allAttractions.push(newAttraction)
		}

		updateAttractions(park.slug, allAttractions)
	}

	return (
		<div className="h-full w-full">
			<div className="w-5/6 fixed top-0 h-28 right-0">
				<MenuBar id={park.slug} saving={saving} />
			</div>

			<div className="w-full bg-[#333333] h-full mt-28">
				<div className="flex flex-row bg-enc-yellow items-center">
					<Title title={`${park.name} - Attractions`} />
				</div>
				<form action={save} method="POST" id={park.slug}>
					{attractions
						.sort((a, b) => a.number - b.number)
						.map((attraction) => (
							<Attraction
								key={attraction.number}
								attraction={attraction}
							/>
						))}

					<Status setLoading={setSaving} />
				</form>
			</div>
		</div>
	)
}

export default AttractionPage

interface AttractionProps {
	attraction: AttractionT
}

const Attraction: React.FC<AttractionProps> = ({ attraction }) => {
	return (
		<div>
			<SectionWithTitle
				id={getId(attraction)}
				defaultValue={attraction.description}
				title={`${attraction.name}`}
				number={attraction.number}
			/>
		</div>
	)
}

function getId(attraction: AttractionT) {
	return `${attraction.number}-${attraction.name}`
}

function getIdTitle(attraction: AttractionT) {
	return `${attraction.number}-${attraction.name}-title`
}
