import React from 'react'
import getPark from '@/utils/getPark'
import HistoryPage from '@/components/admin/HistoryPage'

interface Props {}

const History: React.FC<Props> = async ({}) => {
	const park = await getPark('riverway')

	return <HistoryPage park={park} />
}

export default History
