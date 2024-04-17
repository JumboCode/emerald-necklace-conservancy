'use client'
import React from 'react'
import Image from 'next/image'
import Arrow from '@/assets/arrow.png'
import ArrowDown from '@/assets/arrow-down.png'
import Link from 'next/link'

interface MenuItemProps {
	label: string
	url: string
}

const MenuItem: React.FC<MenuItemProps> = ({ label, url }) => {
	const [open, setOpen] = React.useState(false)
	return (
		<div className="transition-all duration-200">
			<button
				onClick={() => setOpen(!open)}
				className="w-full h-20 flex items-center justify-start border-b  font-questrial text-xl font-thin text-enc-green hover:bg-enc-yellow border-r border-enc-green"
			>
				<div className="w-12">
					{open ? (
						<Image
							src={ArrowDown}
							alt="arrow-right"
							height={22}
							width={33}
							className="h-[12px] w-[18px] mr-2 ml-4"
						/>
					) : (
						<Image
							src={Arrow}
							alt="arrow-right"
							height={33}
							width={22}
							className="h-[18px] w-[12px] mr-2 ml-4"
						/>
					)}
				</div>
				<span className="ml-4">{label}</span>
			</button>
			{open && (
				<div className="flex flex-col">
					<Link
						href={`${url}/history`}
						className="w-full h-20 text-left pl-20 border-b font-questrial text-xl font-thin text-enc-green hover:bg-enc-yellow border-r border-enc-green"
					>
						<span className="ml-4 h-full flex items-center">
							History
						</span>
					</Link>
					<Link
						href={`${url}/attractions`}
						className="w-full h-20 text-left pl-20 border-b font-questrial text-xl font-thin text-enc-green hover:bg-enc-yellow border-r border-enc-green"
					>
						<span className="ml-4 h-full flex items-center">
							Attractions
						</span>
					</Link>
					<Link
						href={`${url}/directions`}
						className="w-full h-20 text-left pl-20 border-b font-questrial text-xl font-thin text-enc-green hover:bg-enc-yellow border-r border-enc-green"
					>
						<span className="ml-4 h-full flex items-center">
							Directions
						</span>
					</Link>
				</div>
			)}
		</div>
	)
}

export default MenuItem
