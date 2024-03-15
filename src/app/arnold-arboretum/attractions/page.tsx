/*
    arnold-arboretum/attractions
*/
'use client'
import React from "react";
import ParkTitle from "@/components/ParkTitle";
import MenuButton from "@/components/MenuButton";
import ParkNav from "@/components/ParkNav";
import arnoldmap from '/public/img/arnoldmap.png';
import menu_icon from '/public/img/menu_icon.png';
import Image from 'next/image'
import MenuButton2 from "@/components/MenuButton2";
import SingleAttraction from "@/components/SingleAttraction";


export default function ArnArbAttractions() {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
	
        <div className="bg-custom-HistoryBackgroundGreen h-full w-full">
                <div className='flex justify-center items-center h-screen'>
                    <ParkNav page={"Attractions"} park={"arnold-arboretum"}/>
		    <div className="relative top-45 left-10">
		    	<SingleAttraction number={10} image={'arnoldmap.png'} />
		    </div>
                    <MenuButton2 options={options} />
                    {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
                    <Image className='m-auto' src={arnoldmap} alt="Arnold Arboretum Map" width={800} height={800}/>
		    {/* Font Orelega is broken */}
                    <p className="text-white font-orelega text-6xl absolute bottom-0 left-0 ml-10 mb-20">Arnold Arboretum</p>
                </div>
                <div className='h-200vh bg-custom-HistoryBackgroundGreen h-full w-full'>
                    <p>Hello!</p>
                </div>
        </div>
    )
}