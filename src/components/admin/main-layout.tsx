import React from 'react'
import Image from 'next/image'
import Arrow from '@/assets/arrow.png'
import ArrowDown from '@/assets/arrow-down.png'
import Logo from '@/assets/new-enc-logo-300x144 1.png'
import Link from 'next/link'
import MenuItem from '@/components/admin/MenuItem'
import MenuBar from '@/components/admin/MenuBar'

interface Props {
	children: React.ReactNode
	id: string
	saving: boolean
}

const Layout: React.FC<Props> = ({ children, id, saving }) => {
	return (
		<div className="flex flex-col h-screen w-full">
			<MenuBar id={id} saving={saving} />
			<div className="flex flex-row h-full w-full ">
				<div className="w-1/5">
					<MenuItem label="Map and Pop-ups" url="/admin/map" />
					<MenuItem
						label="Franklin Park"
						url="/admin/franklin-park"
					/>
					<MenuItem label="Arnold Arboretum" url="franklin-park" />
					<MenuItem label="Jamaica Pond" url="franklin-park" />
					<MenuItem label="Olmsted Park" url="franklin-park" />
					<MenuItem label="Riverway" url="franklin-park" />
					<MenuItem label="Back Bay Fens" url="franklin-park" />
				</div>
				{children}
			</div>
		</div>
	)
}

export default Layout
