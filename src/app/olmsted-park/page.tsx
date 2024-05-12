/*
    olmsted-park/
*/
import React from 'react'
import withTimeout from '../../components/Timeout'
import HistoryContainer from '@/components/HistoryContainer'
import getPark from '@/utils/getPark'

async function OlmsteadHist() {
	const park = await getPark('olmsted-park')

	return <HistoryContainer park={park} />
}

export default OlmsteadHist
