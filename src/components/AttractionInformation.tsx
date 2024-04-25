import React, { Ref } from 'react'
import AttractionCircle from '@/components/AttractionCircle'

interface AttractionInformationProps {
  attractionNumber: number
  attractionName: string
  attractionText: string
}

const AttractionInformation: React.FC<AttractionInformationProps> = ({
  attractionNumber,
  attractionName,
  attractionText
}) => {
  return (
    <div className='p-12'>
      <AttractionCircle
        num={attractionNumber}
        size={'large'}
        fontSize={'large'}
      />
      <div className='p-4'></div> {/* Padding here */}
      <div className='inline-block bg-custom-yellow p-1'>
        <h1 className='text-black text-xl font-questrial'>{attractionName}</h1>
      </div>
      <div className='p-2'></div> {/* Padding here */}
      <div className='inline-block bg-black bg-opacity-50 text-white p-2 w-3/4'>{attractionText}</div>
    </div>
  )
}

export default AttractionInformation
