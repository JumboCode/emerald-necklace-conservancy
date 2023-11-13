import ParkName from '@/components/ParkName'
import MapPin from '@/components/MapPin'
import ParkNav from '../components/ParkNav'
import React from 'react'

function App() {
	const ParkID1 = 'franklin-park'
	return (
		<>
			<ParkName name={ParkID1} />
		</>
		<>
			<ParkName name={ParkID1} />
		</>
	)
}

export default App
