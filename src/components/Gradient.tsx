'use client'
import React from 'react'
import Grad from '@/assets/gradient.png'
import Image from 'next/image'

interface GradientProps {
	size: number
}

export default function Gradient({ size }: { size: any }) {
	return <Image src={Grad} alt="Gradient" width={size} height={size} />
}