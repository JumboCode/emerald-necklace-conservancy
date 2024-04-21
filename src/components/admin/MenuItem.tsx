'use client'
import React from 'react'
import Image from 'next/image'
import Arrow from '@/assets/arrow.png'
import ArrowDown from '@/assets/arrow-down.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface MenuItemProps {
	label: string
	url: string
}

const MenuItem: React.FC<MenuItemProps> = ({ label, url }) => {
	const pathname = usePathname()

	const [open, setOpen] = React.useState(false)
	return (
		<div className="">
			<button
				onClick={() => setOpen(!open)}
				className={`w-full h-20 flex items-center justify-start border-b  font-questrial text-xl font-thin text-enc-green hover:bg-enc-light-green border-r border-enc-green ${
					isActive(pathname, url) && 'bg-enc-yellow'
				}`}
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
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: 'auto' }}
					transition={{ duration: 0.2 }}
					className="flex flex-col"
				>
					<Link
						href={`${url}/history`}
						className={`w-full h-20 text-left pl-20 border-b font-questrial text-xl font-thin text-enc-green hover:bg-enc-light-green border-r border-enc-green ${
							subPageActive(pathname, url, 'history') &&
							'bg-enc-yellow'
						}`}
					>
						<span className="ml-4 h-full flex items-center">
							History
						</span>
					</Link>
					<Link
						href={`${url}/attractions`}
						className={`w-full h-20 text-left pl-20 border-b font-questrial text-xl font-thin text-enc-green hover:bg-enc-light-green border-r border-enc-green ${
							subPageActive(pathname, url, 'attractions') &&
							'bg-enc-yellow'
						}`}
					>
						<span className="ml-4 h-full flex items-center">
							Attractions
						</span>
					</Link>
					<Link
						href={`${url}/directions`}
						className={`w-full h-20 text-left pl-20 border-b font-questrial text-xl font-thin text-enc-green hover:bg-enc-light-green border-r border-enc-green ${
							subPageActive(pathname, url, 'directions') &&
							'bg-enc-yellow'
						}`}
					>
						<span className="ml-4 h-full flex items-center">
							Directions
						</span>
					</Link>
				</motion.div>
			)}
		</div>
	)
}

export default MenuItem

function isActive(pathname: string, url: string) {
	console.log(`checking pathname: ${pathname}, url: ${url}`)
	return pathname.includes(url)
}

function subPageActive(pathname: string, url: string, subPage: string) {
	return pathname.includes(url) && pathname.includes(subPage)
}
