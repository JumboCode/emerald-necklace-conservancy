'use client'

import React, { useEffect, useState } from 'react'
// import Layout from './main-layout'
import Section from '@/components/admin/Section'
import { ParkT } from '@/types'
import updateDirections from '@/actions/updateDirections'
import Status from '@/components/admin/Status'
import Title from '@/components/admin/Title'
import MenuBar from '@/components/admin/MenuBar'

interface Props {
	park: ParkT
}

const Directions: React.FC<Props> = ({ park }) => {
	const [saving, setSaving] = useState(false)

	const save = (formData: FormData) => {
		console.log('save')
		const general = formData.get('general') as string
		const driving = formData.get('driving') as string
		const transit = formData.get('transit') as string
		const walking = formData.get('walking') as string

		if (general && driving && transit && walking) {
			updateDirections(park.slug, {
				general,
				driving,
				transit,
				walking,
			})
		}
	}

	return (
		<div className="h-full w-full">
			<div className="w-5/6 fixed top-0 h-28 right-0">
				<MenuBar id={park.slug} saving={saving} />
			</div>

			<div className="w-full bg-[#333333] h-full mt-28">
				<Title title={`${park.name} - Directions`} />
				<form action={save} method="POST" id={park.slug}>
					<Section
						title="General Information"
						id="general"
						defaultValue={park.directions.general}
					/>
					<Section
						title="By Walking"
						id="walking"
						defaultValue={park.directions.walking}
					/>
					<Section
						title="By Driving"
						id="driving"
						defaultValue={park.directions.driving}
					/>
					<Section
						title="By Transit"
						id="transit"
						defaultValue={park.directions.transit}
					/>
					<Status setLoading={setSaving} />
				</form>
			</div>
		</div>
	)
}

export default Directions
