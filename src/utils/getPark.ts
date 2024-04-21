import clientPromise from './db'
import { ParkT } from '@/types'

const getPark = async (parkSlug: string): Promise<ParkT> => {
	// Create new park
	// const newPark: ParkT = {
	// 	name: 'Riverway',
	// 	slug: 'riverway',
	// 	history: {
	// 		description: {
	// 			first: 'This is the first description',
	// 			second: 'This is the second description',
	// 		},
	// 		images: [],
	// 	},
	// }

	const client = await clientPromise
	const db = client.db()

	// await db.collection('parks').insertOne(newPark)

	const parkDoc = await db.collection('parks').findOne({ slug: parkSlug })

	if (!parkDoc) {
		throw new Error('Park not found')
	}

	return {
		name: parkDoc.name,
		slug: parkDoc.slug,
		history: parkDoc.history,
		popup: parkDoc.popup,
		directions: parkDoc.directions,
		attractions: parkDoc.attractions,
	}
}

export default getPark
