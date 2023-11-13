'use client'
import React from 'react'
import Link from 'next/link'
import MapPin from '@/components/MapPin'

export default function ParkNav({ parkID }: { parkID: any }) {
	return (
		// <div>
		//     <ul>
		//         <li><Link href= {"/"}>Back to Map</Link> </li>
		//         <li><Link href = {`/${parkID}/attractions`}>Attractions</Link> </li>
		//         <li><Link href = {`/${parkID}`}>History</Link></li>
		//         <li><Link href = {`/${parkID}/directions`}>Directions</Link></li>
		//     </ul>
		// </div>
		<MapPin size={100} />
	)
}
