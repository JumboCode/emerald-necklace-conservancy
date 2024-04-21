/*
    olmsted-park/attractions
*/
'use client'
import React from 'react'
import ParkTitle from '@/components/ParkTitle'
import MenuButton from '@/components/MenuButton'
import ParkNav from '@/components/ParkNav'
import bgmap from '/public/img/olmsted-park-map.png'
import menu_icon from '/public/img/menu_icon.png'
import Image from 'next/image'
import MenuButton2 from '@/components/MenuButton2'
import SingleAttraction from '@/components/SingleAttraction'
import AttractionInformation from '@/components/AttractionInformation'
import { useRef } from 'react'

export default function FranklinAttractions () {
  /* Update for location */
  const options = [
    "Ward's Pond",
    'Wildflower Meadow',
    'Daisy Field',
	'Allerton Overlook', 
	'Leverett Pond',
  ]

  /* Update here for as many attractions */
  const descriptionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ]

  const ATTRACTION_START = 17

  return (
    <div className='bg-custom-HistoryBackgroundGreen h-full w-full'>
      <div className='flex justify-center items-center h-screen'>
		{/* Update: Name */}
        <ParkNav page={'Attractions'} park={'franklin-park'} />
        <MenuButton2 options={options} />
        {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
        <div>
          <Image
            className='m-auto'
            src={bgmap}
            alt='Franklin Park Map' /* Update: New alt */
            width={2048} /* Update: iPad width */
            height={600}
          />
		  {/* Update: Change for amt of attractions */}
          <div
            className='absolute'
            style={{ bottom: '54%', left: '4%'}}
            onClick={() => {
              descriptionRefs[0].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 0}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='absolute'
            style={{ bottom: '45%', left: '17%'}}
            onClick={() => {
              descriptionRefs[1].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 1}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='absolute'
            style={{ bottom: '35%', left: '30%'}}
            onClick={() => {
              descriptionRefs[2].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 2}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='absolute'
            style={{ bottom: '55%', left: '58%'}}
            onClick={() => {
              descriptionRefs[3].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 3}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='absolute'
            style={{ bottom: '36%', left: '47%'}}
            onClick={() => {
              descriptionRefs[4].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 4}
              image={'/img/gray_box.jpeg'}
            />
          </div>
        </div>
        {/* QUESTRIAL is broken */}
        <p className='text-white font-orelega text-6xl absolute bottom-0 left-0 ml-10 mb-20'>
          {/* Update: Name */}
		  Olmsted Park{' '}
        </p>
      </div>

      <div className='bg-custom-HistoryBackgroundGreen w-full'>
        {' '}
		{/* Update refs here */}
        <div ref={descriptionRefs[0]} id='0'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 0}
            attractionName={"Ward's Pond"}
            attractionText={
              'This secluded pond is a glacial "kettlehouse" formed at the end \
			  of the last ice age. A serene, heavily wooded area, the visitor\
			  finds a quiet wilderness, steps from the surrounding city.'
            }
          />
        </div>
        <div ref={descriptionRefs[1]} id='1'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 1}
            attractionName={'Wildflower Meadow'}
            attractionText={
              "Once the site of an indoor ice skating rink, the meadow now\
			  offers unique habitat for butterflies, bees, and other pollinators."
            }
          />
        </div>
        <div ref={descriptionRefs[2]} id='2'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 2}
            attractionName={'Daisy Field'}
            attractionText={
              'Olmsted originally designed this as a large meadow surrounded by\
			  woods. Today, playing fields serving community groups for little\
			  league, softball, socer and touch football.'
            }
          />
        </div>
        <div ref={descriptionRefs[3]} id='3'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 3}
            attractionName={'Allerton Overlook'}
            attractionText={
              "This semi-circular walk descends into the park and provides scenic\
			  views of the banks and islands of Leverett Pond."
            }
          />
        </div>
        <div ref={descriptionRefs[4]} id='4'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 4}
            attractionName={'Leverett Pond'}
            attractionText={
              "Leverett Pond is a fine example of Olmsted's skill combining\
			   landscape, water, and structure into his designs. Islands were\
			   created to provide both visual interest and waterfowl breeding\
			   area."
            }
          />
        </div>
        {/* Lengthen page */}
      </div>
    </div>
  )
}
