'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Logo from '@/assets/new-enc-logo-300x144 1.png'
import CircleLoader from 'react-spinners/CircleLoader'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'

interface MenuBarProps {
	id: string
	saving: boolean
}

const MenuBar: React.FC<MenuBarProps> = ({ id, saving }) => {
	const status = useFormStatus()

	return (
		<div className="flex w-full py-4 px-8 border-b border-enc-green h-28 bg-white">
			<div className="flex items-center justify-center space-x-4 ml-auto mr-20">
				<button className="text-xl text-[#333333] font-thin  bg-enc-light-green h-min py-3 px-10 rounded-lg hover:bg-enc-yellow">
					<h2>Preview</h2>
				</button>

				<button
					form={id}
					type="submit"
					className="text-2xl font-superthin bg-white text-enc-green border-enc-green border py-3 px-10 rounded-lg hover:bg-enc-yellow h-16 flex items-center justify-center w-36"
				>
					<h2>{saving ? <CircleLoader color="#567534" /> : 'Save'}</h2>
				</button>

				<Link
					href="/logout"
					className="text-2xl font-superthin bg-white text-enc-green border-enc-green border h-16 py-3 px-10 rounded-lg hover:bg-enc-yellow"
				>
					<h2>Log Out</h2>
				</Link>
			</div>
		</div>
	)
}

export default MenuBar
