/*
    arnold-arboretum/
*/

import React from 'react'
import HistoryContainer from '@/components/HistoryContainer'
import getPark from '@/utils/getPark'

async function ArnArbHistory() {
	const park = await getPark('arnold-arboretum')

	return <HistoryContainer park={park} />
}
export default ArnArbHistory
