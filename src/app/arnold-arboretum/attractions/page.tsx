'use client'
import React from 'react'
import ParkTitle from '@/components/ParkTitle'
import MenuButton from '@/components/MenuButton'
import ParkNav from '@/components/ParkNav'
import arnoldmap from '/public/img/arnoldmap.png'
import menu_icon from '/public/img/menu_icon.png'
import Image from 'next/image'
import MenuButton2 from '@/components/MenuButton2'
import SingleAttraction from '@/components/SingleAttraction'
import AttractionInformation from '@/components/AttractionInformation'
import { useRef } from 'react'

export default function ArnArbAttractions () {
  const options = [
    'Peters Hill',
    'Explorers Garden',
    'Larz Anderson Bonsai Collection',
    'Hunnewell Building'
  ]
  const descriptionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ]

  const ATTRACTION_START = 10;

  return (
    <div className='bg-custom-HistoryBackgroundGreen h-full w-full'>
      <div className='flex justify-center items-center h-screen'>
        <ParkNav page={'Attractions'} park={'arnold-arboretum'} />
        <MenuButton2 options={options} />
        {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
        <div>
          <Image
            className='m-auto'
            src={arnoldmap}
            alt='Arnold Arboretum Map'
            width={800}
            height={800}
          />
          <div
            className='relative bottom-60 left-20'
            onClick={() => {
              descriptionRefs[0].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction number={ATTRACTION_START + 0} image={'/img/gray_box.jpeg'} />
          </div>
          <div
            className='relative bottom-60 left-80'
            onClick={() => {
              descriptionRefs[1].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction number={ATTRACTION_START + 1} image={'/img/gray_box.jpeg'} />
          </div>
          <div
            className='relative bottom-96 left-96'
            onClick={() => {
              descriptionRefs[2].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction number={ATTRACTION_START + 2} image={'/img/gray_box.jpeg'} />
            <div
              className='relative left-40 bottom-20'
              onClick={() => {
                descriptionRefs[3].current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              <SingleAttraction number={ATTRACTION_START + 3} image={'/img/gray_box.jpeg'} />
            </div>
          </div>
        </div>
              {/* QUESTRIAL is broken */}
        <p className='text-white font-orelega text-6xl absolute bottom-0 left-0 ml-10 mb-20'>
          Arnold Arboretum{' '}
        </p>
      </div>

      <div className='bg-custom-HistoryBackgroundGreen w-full'>
        {' '}
        <div ref={descriptionRefs[0]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 0}
            attractionName={'Peters Hill'}
            attractionText={
              "The highest point in the Emerald Necklace, \
              Peters Hill (240 feet) offers spectacular \
              views of Jamaica Plain, Roslindale,\
              and the Boston skyline."
            }
          />
        </div>
        <div ref={descriptionRefs[1]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 1}
            attractionName={'Explorers Garden'}
            attractionText={
              "The area around the Chinese \
              path has long been used by researchers \
              to test the hardiness of new plants gathered \
             from around the world by plant explorers. Don't miss \
             rare and unusual plants like the dove tree, paperbark mable, \
             or Franklinia."
            }
          />
        </div>
        <div ref={descriptionRefs[2]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 2}
            attractionName={'Larz Anderson Bonsai Collection'}
            attractionText={
              "See the oldest and smallest trees \
              of the Arboretum. Open mid-April to early \
              November."
            }
          />
        </div>
        <div ref={descriptionRefs[3]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 3}
            attractionName={'Hunnewell Building'}
            attractionText={
              "This building houses administrative offices, a \
              horticultural library, restrooms, and \
              a visitor center with maps, seasonal \
              exhibitions, and knowledgable staff to help \
              make the most of your visit. Weekday building \
              access for restrooms begins at 9:00am; closed holidays."
            }
          />
        </div>
        {/* Lengthen page */}
      </div>
    </div>
  )
}
