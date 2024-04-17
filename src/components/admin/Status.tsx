import React, { useEffect } from 'react'
import { useFormStatus } from 'react-dom'

interface StatusProps {
	setLoading: (loading: boolean) => void
}

const Status: React.FC<StatusProps> = ({ setLoading }) => {
	const status = useFormStatus()
	useEffect(() => {
		if (status.pending) {
			setLoading(true)
		} else {
			setLoading(false)
		}
	}, [status])

	return <></>
}

export default Status
