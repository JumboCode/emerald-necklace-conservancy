import React from 'react'
import { ParkPopups } from '@/types'
import getParkPopups from '@/actions/getParkPopups'
import Client from './Client'

async function App() {
	const text: ParkPopups = await getParkPopups()
	return <Client parkPopups={text} />
}

export default App
