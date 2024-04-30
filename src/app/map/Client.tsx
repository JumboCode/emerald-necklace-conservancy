'use client'
import '../globals.css'
import React from 'react'
import { useState, useEffect } from 'react'
import MapPin from '@/components/MapPin'
import ParkName from '@/components/ParkName'
import ParkModal from '@/components/ParkModal'
import { ParkPopups } from '@/types'

import MapButton from '@/components/MapButton'

// interface ModalsState {
// 	park1: boolean
// 	park2: boolean
// 	park3: boolean
// 	park4: boolean
// 	park5: boolean
// 	park6: boolean
// }
// const initialState: ModalsState = {
// 	park1: false,
// 	park2: false,
// 	park3: false,
// 	park4: false,
// 	park5: false,
// 	park6: false,
// }

interface Props {
	text: ParkPopups
}
// const text: string[] = [
// 	'At 527 acres, Franklin Park is the largest park in the Emerald Necklace. Named for Benjamin Franklin, the park brings together rural scenery, spectacular rock outcroppings, a woodland preserve, expansive pastoral vistas and an area for active recreation and sports.',
// 	'Established in 1872, the Arnold Arboretum is open daily to the public as a free landscape for the study and enjoyment of trees, shrubs, and vines. The Arboretum is both a beautiful landscape of mature plants and a site for vital scientific research.',
// 	'A pure, glacial kettle hole, Jamaica Pond captivated landscape architect Fredrick Law Olmsted with its “great beauty in reflections and flickering half-lights.” The boathouse at Jamaica Pond provides facilities for sailing, rowing, and fishing. The pond is stocked with trout and salmon raised in state hatcheries.',
// 	'Landscape architect Fredrick Law Olmsted designed the park as “a chain of picturesque fresh-water ponds, alternating with attractive natural groves and meads.” Pathways, bridges, and plantings provide a series of vignettes with scene changes along the way.',
// 	'The Riverway, which serves as a border between Boston and Brookline, is a narrow 34-acre park with paths that follow the meandering course of the Muddy River. With more than 100,000 plantings, it is home to some of the most beautiful bridges in the Emerald Necklace.',
// 	'The Back Bay Fens is an eclectic mix of formal and community gardens, ball fields, memorials and historic structures. With places for passive recreation and active pursuits, the park offers a range of experiences such as gardening and sports and is a popular spot for birders.',
// ]
const MapPage: React.FC<Props> = ({ text }) => {
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
					index={1}
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
					index={5}
				/>
			</div>
			<br />
			<img src="/img/map.png" /> {/* This is the new background image! */}
		</div>
	)
}

export default MapPage
