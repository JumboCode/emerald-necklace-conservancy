'use client'
import React from 'react'
  
interface ParkTitleProps {
    title: string;
}
  
  const ParkTitle: React.FC<ParkTitleProps> = ({ title }) => {
    return (
      <div className="absolute top-0 left-0 mt-10 ml-10">
        <div className = "p-6 max-w-sm">
          <h1 className="text-2xl font-semibold font-Inter mb-4">{title}</h1>
        </div>
      </div>
    );
  };
  
  export default ParkTitle;