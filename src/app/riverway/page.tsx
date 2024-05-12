/*
    riverway/
*/
import React from 'react'
import withTimeout from '../../components/Timeout'
import HistoryContainer from '@/components/HistoryContainer'
import getPark from '@/utils/getPark'

async function RiverwayHistory() {
	const park = await getPark('riverway')

	return <HistoryContainer park={park} />
}

export default RiverwayHistory
