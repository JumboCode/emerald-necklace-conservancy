'use server'

import { DirectionsT } from '@/types'
import clientPromise from '@/utils/db'

async function updatePopups(popups: { slug: string; popup: string }[]) {
	console.log(`updatePopups`)

	const client = await clientPromise
	const db = client.db()

	for (const popup of popups) {
		await db.collection('parks').updateOne(
			{ slug: popup.slug },
			{
				$set: {
					popup: popup.popup,
				},
			}
		)
	}
}

export default updatePopups

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
