import React from 'react';
import Image from 'next/image'


export default function ParkImage({ direction, src, height, width }: { direction: 'left' | 'right', src: string, height: number, width: number }) {
    const containerClassesRight = 'border-b-[15px] border-r-[15px] border-lime-400 '
    const containerClassesLeft = 'border-b-[15px] border-l-[15px] border-lime-400 '
    const imageClasses = `p-${direction === 'right' ? 'l' : 'r'}-2.5`; // Tailwind padding class, adjust as needed
    // final return
    return (
        <div className={direction === 'right' ? containerClassesRight : containerClassesLeft}>
            <div className={imageClasses}>
                <Image src={src} height={height} width={width} alt="Park Image" />
            </div>
        </div>
   )
}

