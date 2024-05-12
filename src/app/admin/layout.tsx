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
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className="flex flex-col h-screen w-full overflow-clip">
			<div className="flex flex-row h-full w-full">
				<div className="w-1/5 flex flex-col">
					<Link
						href="/admin"
						className="pt-2 pl-4 h-28 bg-white w-full"
					>
						<Image src={Logo} alt="logo" height={80} width={160} />
					</Link>
					<div
						id="sidebar"
						className="flex-grow border-t border-enc-green overflow-y-auto"
					>
						<div>
							<Link
								href="/admin/popups"
								className="w-full h-20 flex items-center justify-start border-b font-questrial text-xl font-thin text-enc-green hover:bg-enc-yellow border-r border-enc-green"
							>
								<div className="w-12"></div>
								<span className="ml-4">Map Popups</span>
							</Link>
							<MenuItem
								label="Franklin Park"
								url="/admin/franklin-park"
							/>
							<MenuItem
								label="Arnold Arboretum"
								url="/admin/arnold-arboretum"
							/>
							<MenuItem
								label="Jamaica Pond"
								url="/admin/jamaica-pond"
							/>
							<MenuItem
								label="Olmsted Park"
								url="/admin/olmsted-park"
							/>
							<MenuItem label="Riverway" url="/admin/riverway" />
							<MenuItem
								label="Back Bay Fens"
								url="/admin/back-bay-fens"
							/>
						</div>
					</div>
				</div>
				<div className="overflow-auto w-full bg-[#333333]">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout
