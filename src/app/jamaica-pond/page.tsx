/*
    arnold-arboretum/
*/
import withTimeout from '../../components/Timeout'
import React from 'react'
import HistoryContainer from '@/components/HistoryContainer'
import getPark from '@/utils/getPark'

async function JamaicaPondHist() {
	const park = await getPark('jamaica-pond')

	return <HistoryContainer park={park} />
}

export default JamaicaPondHist
