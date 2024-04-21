import React from 'react'
import Section from '@/components/admin/Section'
import { AttractionT } from '@/types'
import AttractionsPage from '@/components/admin/AttractionsPage'
import getPark from '@/utils/getPark'

interface Props {}

const Attractions: React.FC<Props> = async ({}) => {
	const park = await getPark('jamaica-pond')

	return <AttractionsPage park={park} />
}

export default Attractions
