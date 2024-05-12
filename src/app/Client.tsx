'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Splash from '../assets/splashscreen 1.png'
import Logo from '../assets/new-enc-logo-300x144 1.png'
import MapPin from '@/components/MapPin'
import ParkName from '@/components/ParkName'
import MapButton from '@/components/MapButton'
import { ParkPopups } from '@/types'

interface Props {
	parkPopups: ParkPopups
}

const Client: React.FC<Props> = ({ parkPopups }) => {
	const [start, setStart] = useState<boolean>(false)

	// if ?map=true is in the URL, set map to true

	const searchParams = useSearchParams()
	const mapParam = searchParams.get('map')

	useEffect(() => {
		console.log(mapParam)
		if (mapParam === 'true') {
			setStart(false)
		}
	}, [])

	return (
		<div>
			{start ? (
				<WelcomePage setStart={setStart} />
			) : (
				<MapPage text={parkPopups} />
			)}
		</div>
	)
}

export default Client

interface WelcomePageProps {
	setStart: (map: boolean) => void
}
const WelcomePage: React.FC<WelcomePageProps> = ({ setStart }) => {
	const handleClick = () => {
		setStart(false)
	}
	return (
		<div
			className="text-2xl w-full h-screen flex justify-center items-center bg-#FFFFFF z-50"
			onClick={handleClick}
		>
			<Image
				src={Splash}
				alt="Splash Background"
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100%',
					height: '100%',
				}}
			/>
			<Image
				src={Logo}
				alt="Logo"
				style={{
					position: 'absolute',
					top: '10%',
					left: '20%',
					width: '20%',
					height: '15%',
				}}
			/>
			<h1
				className="absolute top-45 left-1/2 transform -translate-x-1/2 text-center text-5xl text-[#567534] "
				style={{
					position: 'absolute',
					top: '32%',
					left: '30%',
					width: '50%',
					height: '20%',
				}}
			>
				Park History <br /> and Attractions
			</h1>
		</div>
	)
}

interface MapPageProps {
	text: ParkPopups
}

const MapPage: React.FC<MapPageProps> = ({ text }) => {
	const [open, setOpen] = useState<boolean[]>(new Array(6).fill(false))

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			let clickIsInModal = false
			document.querySelectorAll('[data-modal]').forEach((el) => {
				if (event.target && el.contains(event.target as Node)) {
					clickIsInModal = true
				}
			})
			if (clickIsInModal) {
				return
			}
			const isModalOpen = open.some((isOpen) => isOpen)
			if (isModalOpen) {
				setOpen(open.map(() => false))
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])

	return (
		<div className="bg-map bg-cover bg-center min-h-screen w-full flex items-center justify-center object-cover">
			<div>
				<MapButton></MapButton>
			</div>
			<div className="absolute" style={{ top: '40px', left: '15px' }}>
				<img
					src="/map_images/dove_tree.png"
					alt="Dove Tree"
					width={160}
				/>
			</div>
			<div className="absolute" style={{ top: '115px', left: '250px' }}>
				<img src="/map_images/bonsai.png" alt="bonsai" width={90} />
			</div>
			<div
				className="absolute"
				style={{ bottom: '170px', left: '290px' }}
			>
				<img src="/map_images/giraffe.png" alt="giraffe" width={170} />
			</div>
			<div
				className="absolute"
				style={{ bottom: '160px', left: '430px' }}
			>
				<img src="/map_images/turtle.png" alt="turtle" width={80} />
			</div>
			<div className="absolute" style={{ right: '30px', top: '145px' }}>
				<img
					src="/map_images/blue_heron.png"
					alt="blue_heron"
					width={100}
				/>
			</div>
			<div className="absolute" style={{ top: '90px', left: '475px' }}>
				<img src="/map_images/sailboat.png" alt="sailboat" width={80} />
			</div>
			<div className="absolute" style={{ top: '105px', left: '385px' }}>
				<img src="/map_images/camorant.png" alt="camorant" width={80} />
			</div>
			<div className="absolute" style={{ left: '170px', top: '135px' }}>
				<MapPin size={75} />
			</div>
			<div className="absolute" style={{ right: '135px', top: '110px' }}>
				<MapPin size={75} />
			</div>
			<div className="absolute" style={{ right: '135px', top: '365px' }}>
				<MapPin size={75} />
			</div>
			<div
				className="absolute"
				style={{ bottom: '120px', left: '320px' }}
			>
				<MapPin size={75} />
			</div>
			<div
				className={`absolute z-${open[1] ? 10 : 0}`}
				style={{ left: '0px', top: '240px' }}
			>
				<ParkName
					name={'Arnold Arboretum'}
					text={text.arnoldArboretum}
					open={open}
					setOpen={setOpen}
					index={0}
				/>
			</div>
			<div
				className={`absolute z-${open[5] ? 10 : 0}`}
				style={{ right: '45px', top: '470px' }}
			>
				<ParkName
					name={'Back Bay Fens'}
					text={text.backBayFens}
					open={open}
					setOpen={setOpen}
					index={5}
				/>
			</div>
			<div className="absolute" style={{ left: '445px', top: '30px' }}>
				<MapPin size={75} />
			</div>
			<div
				className={`absolute z-${open[2] ? 10 : 0}`}
				style={{ left: '150px', top: '25px' }}
			>
				<ParkName
					name={'Jamaica Pond'}
					text={text.jamaicaPond}
					open={open}
					setOpen={setOpen}
					index={2}
				/>
			</div>
			<div className="absolute" style={{ right: '370px', top: '105px' }}>
				<MapPin size={75} />
			</div>
			<div
				className={`absolute z-${open[3] ? 10 : 0}`}
				style={{ right: '260px', top: '205px' }}
			>
				<ParkName
					name={'Olmsted Park'}
					text={text.olmstedPark}
					open={open}
					setOpen={setOpen}
					index={3}
				/>
			</div>
			<div
				className={`absolute z-${open[0] ? 10 : 0}`}
				style={{ bottom: '40px', left: '330px' }}
			>
				<ParkName
					name={'Franklin Park'}
					text={text.franklinPark}
					open={open}
					setOpen={setOpen}
					index={4}
				/>
			</div>
			<div
				className={`absolute z-${open[4] ? 10 : 0}`}
				style={{ right: '80px', top: '30px' }}
			>
				<ParkName
					name={'Riverway'}
					text={text.riverway}
					open={open}
					setOpen={setOpen}
					index={1}
				/>
			</div>
			<br />
			<img src="/img/map.png" /> {/* This is the new background image! */}
		</div>
	)
}
