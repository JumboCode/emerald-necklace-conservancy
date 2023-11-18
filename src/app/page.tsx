import ParkName from '@/components/ParkName'
import MapPin from '@/components/MapPin'
import ParkNav from '../components/ParkNav'
import React from 'react'
import ParkModal from '@/components/ParkModal'

function App() {
	const ParkID1 = 'franklin-park'

	return (
		<>
			<ParkName name={ParkID1} />
			<ParkModal
				title="Franklin Park"
				text="At 527 acres, Franklin Park is the largest park in the Emerald Necklace. Named for Benjamin Franklin, the park brings together rural scenery, spectacular rock outcroppings, a woodland preserve, expansive pastoral vistas and an area for active recreation and sports."
				url="/parks"
				open={true}
			/>
		</>
	)
}

export default App