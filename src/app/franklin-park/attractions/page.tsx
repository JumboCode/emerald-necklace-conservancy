/*
    franklin-park/attractions
*/
'use client'

import React from 'react'
import ParkTitle from '@/components/ParkTitle'
import MenuButton from '@/components/MenuButton'
import ParkNav from '@/components/ParkNav'
import bgmap from '/public/img/franklin-map.png'
import menu_icon from '/public/img/menu_icon.png'
import Image from 'next/image'
import MenuButton2 from '@/components/MenuButton2'
import SingleAttraction from '@/components/SingleAttraction'
import AttractionInformation from '@/components/AttractionInformation'
import { useRef } from 'react'

export default function FranklinAttractions () {
  /* Update for location */
  const options = [
    'White Stadium',
    'Overlook Shelter Ruins',
    'The Playstead',
	'Franklin Park Zoo', 
	'William J. Devine Golf Course',
	'Schoolmaster Hill', 
	'The Wilderness', 
	'The 99 Steps/Ellicott Arch', 
	'Scarboro Pond and Hill'
  ]

  /* Update here for as many attractions */
  const descriptionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ]

  const ATTRACTION_START = 1

  return (
    <div className='bg-custom-HistoryBackgroundGreen h-full w-full'>
      <div className='flex justify-center items-center h-screen'>
		{/* Update: Name */}
        <ParkNav page={'Attractions'} park={'franklin-park'} />
        <MenuButton2 options={options} />
        {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
        <div>
          <Image
            className='m-auto mt-80'
            src={bgmap}
            alt='Franklin Park Map' /* Update: New alt */
            width={600} /* Update: iPad width */
            height={600}
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
          <div
            className='relative left-40 bottom-20'
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
            className='relative left-40 bottom-20'
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
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[5].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 5}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[6].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 6}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[7].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 7}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[8].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 8}
              image={'/img/gray_box.jpeg'}
            />
          </div>
        </div>
        {/* QUESTRIAL is broken */}
        <p className='text-white font-orelega text-6xl absolute bottom-0 left-0 ml-10 mb-20'>
          {/* Update: Name */}
		  Franklin Park{' '}
        </p>
      </div>

      <div className='bg-custom-HistoryBackgroundGreen w-full'>
        {' '}
		{/* Update refs here */}
        <div ref={descriptionRefs[0]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 0}
            attractionName={'White Stadium'}
            attractionText={
              'White Stadium is run and used by Boston Public School athletics\
			    for sporting events, primarily track and football. The stadium\
			    is open for public used from 7am-4pm on Monday through Thursday,\
            	so stop by with some friends and play a game or two!'
            }
          />
        </div>
        <div ref={descriptionRefs[1]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 1}
            attractionName={'Overlook Shelter Ruins'}
            attractionText={
              "Originally a field house, it was one of the few structures Olmsted\
			  ever designed. The site was the home to Elma Lewis' Playhouse in\
			  the Park in the '60s and '70s, and jazz greats, including Duke\
			  Ellington, performed here."
            }
          />
        </div>
        <div ref={descriptionRefs[2]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 2}
            attractionName={'The Playstead'}
            attractionText={
              'A large, active sports area that accommodates basketball, tennis\
			  and many field sports.'
            }
          />
        </div>
        <div ref={descriptionRefs[3]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 3}
            attractionName={'Franklin Park Zoo'}
            attractionText={
              "Founded in 1912, the zoo's 72 acres are home to lions, tigers\
			  giraffes, and more. Visitors to the signature Tropical Forest\
			  can stand face-to-face with the Zoo's seven gorillas at one of\
			  five glass viewing stations. Heroic statues by Daniel Chester\
			  French flank the north entrance. Learn More: www.franklinparkzoo.com"
            }
          />
        </div>
        <div ref={descriptionRefs[4]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 4}
            attractionName={'William J. Devine Golf Course'}
            attractionText={
              "Originally a sheep meadow in Olmsted's design, this 18-hole\
			  facility is the second oldest public golf course in the country.\
			  Open year round, weather permitting."
            }
          />
        </div>
        <div ref={descriptionRefs[5]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 5}
            attractionName={'Schoolmaster Hill'}
            attractionText={
              'Named for Ralph Waldo Emerson who lived near this site in the 1820s\
			  when he was a schoolteacher in Roxbury. This hidden spot has picnic\
			  tables, century-old white pines, and offers a spectacular view\
			  across the park and to the Blue Hills beyond.'
            }
          />
        </div>
        <div ref={descriptionRefs[6]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 6}
            attractionName={'The Wilderness'}
            attractionText={
              'A 65-acre native oak forest with meandering paths and huge Roxbury\
			  puddingstone outcroppings, the Wilderness is a picturesque\
			  landscape and a good example of urban woodlands.'
            }
          />
        </div>
        <div ref={descriptionRefs[7]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 7}
            attractionName={'The 99 Steps/Ellicot Arch'}
            attractionText={
              'John Charles certainly followed the footsteps of his father, \
			  Olmsted, when designing Ellicott Arch. Completed in 1899, the\
			   exterior is covered with Roxbury puddingstone boulders taken \
			   from the area. Across the road from Ellicott Arch are the 99 \
			   Steps, also made of puddingstone from the area.'
            }
          />
        </div>
        <div ref={descriptionRefs[8]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 8}
            attractionName={'Scarboro Pond and Hill'}
            attractionText={
              'Scarboro Pond is connected to another nearby waterway, with \
              underground pipes leading from Jamaica Pond to supply water. Next \
              to the pond is a sloping hillside of huge, century old beech trees. \
              Olmsted intended for the hill along the West side of the ponf to \
              house a dairy with sheep and cattle, though a growing city would \
              deem open space for recreational purposes more important.'
            }
          />
        </div>
        {/* Lengthen page */}
      </div>
    </div>
  )
}
