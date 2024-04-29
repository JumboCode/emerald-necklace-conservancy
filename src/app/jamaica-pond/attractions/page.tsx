/*
    jamaica-pond/attractions
*/
'use client'

import React from 'react'
import ParkTitle from '@/components/ParkTitle'
import MenuButton from '@/components/MenuButton'
import ParkNav from '@/components/ParkNav'
import bgmap from '/public/img/jamaica-pond-map.png'
import menu_icon from '/public/img/menu_icon.png'
import Image from 'next/image'
import MenuButton2 from '@/components/MenuButton2'
import SingleAttraction from '@/components/SingleAttraction'
import AttractionInformation from '@/components/AttractionInformation'
import { useRef } from 'react'
import BacktoTopButton from '@/components/BacktoTopButton'

export default function JamaicaAttractions () {
    // const preScroll = useRef(null);
    // const elemRef = useRef(null);
    // const [scale, setScale] = useState(1.05);
 
    // useLayoutEffect(() => {
    //     const botPos = (element) => element.getBoundingClientRect().bottom;
    //     const onScroll = () => {
    //       const divBotPos = botPos(elemRef.current);
    //       const scrollPos = preScroll.current > window.scrollY;
    //       preScroll.current = window.scrollY;
    //       if (scrollPos && divBotPos > window.innerHeight) {
    //         setScale(1);
    //         return;
    //       }
    //       if (divBotPos < window.innerHeight) {
    //         setScale(1.1);
    //       }
    //     };
    
    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    //   }, []);
  
  
  
  /* Update for location */
  const options = [
    'Jamaica Pond Boathouse/Bandstand',
    'Parkman Memorial',
    'Pinebank Promontory',
  ]

  /* Update here for as many attractions */
  const descriptionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ]

  const ATTRACTION_START = 14

  return (
    <div className='absolute bg-custom-HistoryBackgroundGreen h-full w-full'>
      <div id="group1" class="parallax parallax__group">
      <div className='top-0 justify-center items-center'>
		{/* Update: Name */}
        <ParkNav page={'Attractions'} park={'jamaica-pond'} />
        
        {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
        <div className="parallax__fixed fixed">
            {/*  style={{
            transition: "transform 1000ms ease-in-out",
            transform: `scale(${scale*1.2}) translate(${scale}%, 5%)`
            }} */}
             <Image
            className='m-auto mt-16'
            src={bgmap}
            alt='Jamaica Pond Map' /* Update: New alt */
            width={2048} /* Update: iPad width */
            height={300}
          />
		  {/* Update: Change for amt of attractions */}
          <div
            className='absolute'
            style={{ bottom: '22%', left: '41%'}}
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
            style={{ bottom: '53%', left: '49%'}}
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
            style={{ bottom: '36%', left: '62%'}}
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
		  Jamaica Pond{' '}
        </p>


      
      
      <div id="group1" class="parallax parallax__group" className='bg-custom-HistoryBackgroundGreen w-full'>
        <div class="h-[50vh]"> 
        </div>
        {' '}
		{/* Update refs here */}
        <div class="parallax__layer parallax__layer--base" ref={descriptionRefs[0]} id='0'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 0}
            attractionName={'Jamica Pond Boathouse/Bandstand'}
            attractionText={
              "Built in 1912, these Tudor-style structures add a rustic element\
				to the pond. Visitors can rent sailboats or rowboats to enjoy \
				unique views of the park or simply drift on the water \
				(www.courageoussailing.org). The Bandstand is home to numerous \
				recreational, educational, and cultural activities. The\
				Boathouse is open April 1 through Veteran's Day."
            }
          />
        </div>
        <div ref={descriptionRefs[1]} id='1'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 1}
            attractionName={'Parkman Memorial'}
            attractionText={
              "Daniel Chester French, Sculptor."
            }
          />
        </div>
        <div ref={descriptionRefs[2]} id='2'>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 2}
            attractionName={'The Playstead'}
            attractionText={
              "A peaceful spot in this busy park, the promontory's stunning views \
			  across the Pond and cooling breezes through tall pines made it an \
			   attractive site for three successive mansions in the 1800s. \
			   Today, a granite outline marks the footprint of the last mansion\
			   that stood here."
            }
          />
        </div>
        {/* Lengthen page */}
        <BacktoTopButton />
      </div>
      <MenuButton2 options={options} />
    </div>
    </div>
    </div>
  )
}
