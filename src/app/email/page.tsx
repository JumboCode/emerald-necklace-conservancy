'use client'

import React from 'react'
import withTimeout from '../../components/Timeout'

import BackButton from '../../components/BackButton'

const EmailSignupPage = () => {
	return (
		<div className="w-full  h-screen pt-24">
			<iframe
				src="https://www.emeraldnecklace.org/contact/sign-up-for-enews/"
				width="100%"
				height="100%"
				frameBorder="0"
			></iframe>
			<BackButton></BackButton>
		</div>
	)
}

export default withTimeout(EmailSignupPage)
