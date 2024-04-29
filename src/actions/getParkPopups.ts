'use server'

import { ParkPopups, ParkT } from '@/types'
import clientPromise from '@/utils/db'
import getAllParks from '@/utils/getAllParks'
import getPark from '@/utils/getPark'

async function getParkPopups(): Promise<ParkPopups> {
	const allParks = await getAllParks()

	const parkPopups: ParkPopups = {
		franklinPark:
			allParks.find((park: ParkT) => park.slug === 'franklin-park')!
				.popup || '',
		arnoldArboretum:
			allParks.find((park: ParkT) => park.slug === 'arnold-arboretum')!
				.popup || '',
		jamaicaPond:
			allParks.find((park: ParkT) => park.slug === 'jamaica-pond')!
				.popup || '',
		olmstedPark:
			allParks.find((park: ParkT) => park.slug === 'olmsted-park')!
				.popup || '',
		riverway:
			allParks.find((park: ParkT) => park.slug === 'riverway')!.popup ||
			'',
		backBayFens:
			allParks.find((park: ParkT) => park.slug === 'back-bay-fens')!
				.popup || '',
	}

	return parkPopups
}

export default getParkPopups
