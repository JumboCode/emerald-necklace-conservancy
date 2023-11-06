import ParkNav from '../components/ParkNav';
import React from "react";

function App() {
	const ParkID1 = "franklin-park";
	return (
		<div>
			<ParkNav parkID = {ParkID1}/>
		</div>
	)
}

export default ParkNav;
