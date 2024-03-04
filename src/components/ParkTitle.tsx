'use client'
import React from 'react'
  
interface ParkTitleProps {
    title: string;
}
  
  const ParkTitle: React.FC<ParkTitleProps> = ({ title }) => {
    return (
      <div className="absolute left-10 mt-10 ml-10">
        <div className = "p-6 max-w-sm bg-custom-white rounded-lg">
          <h1 className="text-2xl font-semibold font-Inter mb-4">{title}</h1>
        </div>
      </div>
    );
  };
  
  export default ParkTitle;