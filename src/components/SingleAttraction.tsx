'use client'

import React from 'react';
interface NumberAttractionProps {
  number: number;
  image: string;
}

const SingleAttraction: React.FC<NumberAttractionProps> = ({ number, image }) => {
  return (
    <div className="flex items-center">
      <div className="bg-custom-yellow w-12 h-12 rounded-full flex justify-center items-center">
        <h1 className="text-black text-xl font-questrial ">{number}</h1>
      </div>
      <img src='arnoldmap.png' alt="attraction" className="w-20 h-10 object-cover ml-2" />
    </div>
  );
};

export default SingleAttraction;