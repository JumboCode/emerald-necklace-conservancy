'use client'

import React, { useEffect, useState } from 'react'
import Section from '@/components/admin/Section'
import { ParkT } from '@/types'
import updatePopups from '@/actions/updatePopups'
import Status from '@/components/admin/Status'
import Title from '@/components/admin/Title'
import MenuBar from '@/components/admin/MenuBar'

interface Props {
	popups: {
		slug: string
		popup: string
	}[]
}

const Client: React.FC<Props> = ({ popups }) => {
	const [saving, setSaving] = useState(false)

	const save = (formData: FormData) => {
		console.log('save')
		const franklinPark = formData.get('franklin-park') as string
		const arnoldArboretum = formData.get('arnold-arboretum') as string
		const jamaicaPond = formData.get('jamaica-pond') as string
		const olmstedPark = formData.get('olmsted-park') as string
		const riverway = formData.get('riverway') as string
		const backBayFens = formData.get('back-bay-fens') as string

		if (
			franklinPark &&
			arnoldArboretum &&
			jamaicaPond &&
			olmstedPark &&
			riverway &&
			backBayFens
		) {
			updatePopups([
				{ slug: 'franklin-park', popup: franklinPark },
				{ slug: 'arnold-arboretum', popup: arnoldArboretum },
				{ slug: 'jamaica-pond', popup: jamaicaPond },
				{ slug: 'olmsted-park', popup: olmstedPark },
				{ slug: 'riverway', popup: riverway },
				{ slug: 'back-bay-fens', popup: backBayFens },
			])
		}
	}

	return (
		<div className="h-full w-full">
			<div className="w-5/6 fixed top-0 h-28 right-0">
				<MenuBar id={'popup'} saving={saving} />
			</div>

			<div className="w-full bg-[#333333] h-full mt-28">
				<Title title="Map Popups" />
				<form action={save} method="POST" id={'popups-btn'}>
					<Section
						title="Franklin Park"
						id="franklin-park"
						defaultValue={
							popups.find((p) => p.slug === 'franklin-park')
								?.popup || ''
						}
					/>
					<Section
						title="Arnold Arboretum"
						id="arnold-arboretum"
						defaultValue={
							popups.find((p) => p.slug === 'arnold-arboretum')
								?.popup || ''
						}
					/>
					<Section
						title="Jamaica Pond"
						id="jamaica-pond"
						defaultValue={
							popups.find((p) => p.slug === 'jamaica-pond')
								?.popup || ''
						}
					/>
					<Section
						title="Olmsted Park"
						id="olmsted-park"
						defaultValue={
							popups.find((p) => p.slug === 'olmsted-park')
								?.popup || ''
						}
					/>
					<Section
						title="Riverway"
						id="riverway"
						defaultValue={
							popups.find((p) => p.slug === 'riverway')?.popup ||
							''
						}
					/>
					<Section
						title="Back Bay Fens"
						id="back-bay-fens"
						defaultValue={
							popups.find((p) => p.slug === 'back-bay-fens')
								?.popup || ''
						}
					/>

					<Status setLoading={setSaving} />
				</form>
			</div>
		</div>
	)
}

export default Client
