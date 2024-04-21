'use server'

import { DirectionsT } from '@/types'
import clientPromise from '@/utils/db'

async function updateDirections(park: string, directions: DirectionsT) {
	console.log(`updateDirections of ${park}`)

	await sleep(2000)
	const client = await clientPromise
	const db = client.db()
	await db.collection('parks').updateOne(
		{ slug: park },
		{
			$set: {
				directions: directions,
			},
		}
	)
}

export default updateDirections

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
