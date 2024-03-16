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
                <MenuButton2 options={options} />
                {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
                <div>
                    <Image className='m-auto' src={arnoldmap} alt="Arnold Arboretum Map" width={800} height={800}/>
                    <div className="relative bottom-60 left-20">
                        <SingleAttraction number={10} image={'/img/gray_box.jpeg'} />
                    </div>
                    <div className="relative bottom-60 left-80">
                        <SingleAttraction number={11} image={'/img/gray_box.jpeg'} />
                    </div>
                    <div className="relative bottom-96 left-96">
                        <SingleAttraction number={12} image={'/img/gray_box.jpeg'} />
                        <div className="relative left-40 bottom-20">
                            <SingleAttraction number={13} image={'/img/gray_box.jpeg'} />
                        </div>
                    </div>
                </div>
                {/* Font Orelega is broken */}
                <p className="text-white font-orelega text-6xl absolute bottom-0 left-0 ml-10 mb-20">Arnold Arboretum</p>
            </div>
            <div className='h-200vh bg-custom-HistoryBackgroundGreen h-full w-full'> {/* Lengthen page */}
            </div>
        </div>
    )
}