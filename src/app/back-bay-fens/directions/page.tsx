/*
    back-bay-fens/directions
*/


import React from "react";
import withTimeout from '../../../components/Timeout'
import DirectionsContainer from '../../../components/DirectionsContainer'
import getPark from '@/utils/getPark'


export function BackBayFensDirections() {
  const park = await getPark('back-bay-fens')

	return (
		<DirectionsContainer
			parkURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.048915164372!2d-71.0981810238916!3d42.34148047119468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1e29987cdd%3A0x6e56493aa0fbdf69!2sBack%20Bay%20Fens!5e0!3m2!1sen!2sus!4v1712418165446!5m2!1sen!2sus"
			park={park}
		/>
	)
}

export default withTimeout(BackBayFensDirections)

