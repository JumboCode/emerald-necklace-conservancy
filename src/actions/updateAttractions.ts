'use server'

import { AttractionT } from '@/types'
import clientPromise from '@/utils/db'
import getPark from '@/utils/getPark'

async function updateAttractions(park: string, attractions: AttractionT[]) {
	console.log(`updateAttraction of ${park}`)

	const client = await clientPromise
	const db = client.db()
	await db.collection('parks').updateOne(
		{ slug: park },
		{
			$set: {
				attractions: attractions,
			},
		}
	)
}

export default updateAttractions

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
