import clientPromise from './db'
import { ParkT } from '@/types'

const getAllParks = async (): Promise<ParkT[]> => {
	const client = await clientPromise
	const db = client.db()

	const parkDocs = await db.collection('parks').find({})

	if (!parkDocs) {
		throw new Error('Park not found')
	}

	const allParks: ParkT[] = []

	await parkDocs.forEach((parkDoc) => {
		allParks.push({
			name: parkDoc.name,
			slug: parkDoc.slug,
			history: parkDoc.history,
			directions: parkDoc.directions,
			popup: parkDoc.popup,
			attractions: parkDoc.attractions,
		})
	})

	return allParks
}

export default getAllParks
