/*
    back-bay-fens/
*/

import React from 'react'
import withTimeout from '../../components/Timeout'
import HistoryContainer from '@/components/HistoryContainer'
import getPark from '@/utils/getPark'

async function BackBayFensHistory() {
	const park = await getPark('back-bay-fens')

	return <HistoryContainer park={park} />
}

export default BackBayFensHistory
