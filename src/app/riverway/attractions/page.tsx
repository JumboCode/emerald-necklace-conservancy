/*
    riverway/attractions
*/
'use client'

import React from "react";

import ParkTitle from '@/components/ParkTitle'
import MenuButton from '@/components/MenuButton'
import ParkNav from '@/components/ParkNav'
import bgmap from '/public/img/riverway-map.png'
import menu_icon from '/public/img/menu_icon.png'
import Image from 'next/image'
import MenuButton2 from '@/components/MenuButton2'
import SingleAttraction from '@/components/SingleAttraction'
import AttractionInformation from '@/components/AttractionInformation'
import { useRef } from 'react'

export default function RiverwayAttractions () {
  /* Update for location */
  const options = [
    'Bellevue Street Bridge',
    'Chapel Street Bridge Area/Historic Bridle Paths',
    'Round House Shelter',
  ]

  /* Update here for as many attractions */
  const descriptionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ]

  const ATTRACTION_START = 22

  return (
    <div className='bg-custom-HistoryBackgroundGreen h-full w-full'>
      <div className='flex justify-center items-center h-screen'>
		{/* Update: Name */}
        <ParkNav page={'Attractions'} park={'riverway'} />
        <MenuButton2 options={options} />
        {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
        <div>
          <Image
            className='m-auto mt-96'
            src={bgmap}
            alt='Riverway Map' /* Update: New alt */
            width={2048} /* Update: iPad width */
            height={300}
          />
		  {/* Update: Change for amt of attractions */}
          <div
            className='relative bottom-96 left-20'
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
            className='relative bottom-80 left-96'
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
            className='relative bottom-96 left-116'
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
        </div>
        {/* QUESTRIAL is broken */}
        <p className='text-white font-orelega text-6xl absolute bottom-0 left-0 ml-10 mb-20'>
          {/* Update: Name */}
		  Riverway{' '}
        </p>
      </div>

      <div className='bg-custom-HistoryBackgroundGreen w-full'>
        {' '}
		{/* Update refs here */}
        <div ref={descriptionRefs[0]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 0}
            attractionName={'Bellevue Street Bridge'}
            attractionText={
              "A bridge on Bellevue St. in West Roxbury is named in honor of \
			  the late World War II veteran Charles Doyle."
            }
          />
        </div>
        <div ref={descriptionRefs[1]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 1}
            attractionName={'Chapel Street Bridge Area/Historic Bridle Paths'}
            attractionText={
              "Bridges played a key role in all of Olmsted's work, not only\
			   along rivers, but everywhere that he sought to separate\
			    different modes of transportation. The Chapel Street Bridge\
				separated walkers above from the bridle path below."
            }
          />
        </div>
        <div ref={descriptionRefs[2]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 2}
            attractionName={'Round House Shelter'}
            attractionText={
              "Take a break on a bench at the historic Round House."
            }
          />
        </div>
        {/* Lengthen page */}
      </div>
    </div>
  )
}
