'use server'

import clientPromise from '@/utils/db'

async function updateHistory(
	park: string,
	first: string,
	second: string,
	images: string[]
) {
	console.log(`updateHistory of ${park} with ${first} and ${second}`)

	await sleep(2000)
	const client = await clientPromise
	const db = client.db()
	await db.collection('parks').updateOne(
		{ slug: park },
		{
			$set: {
				'history.description.first': first,
				'history.description.second': second,
				'history.images': images,
			},
		}
	)
}

export default updateHistory

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
