'use client'
import React from 'react'
import Pin from '@/assets/map-pin.png'
import Image from 'next/image'

interface MapPinProps {
	size: number
}

export default function MapPin({ size }: { size: any }) {
	return <Image src={Pin} alt="Map Pin" width={size} height={size} />
}
