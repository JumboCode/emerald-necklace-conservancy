'use client'
import React from 'react'
  
interface ParkTitleProps {
    title: string;
    bodyText: string;
}
  
  const ParkTitle: React.FC<ParkTitleProps> = ({ title, bodyText}) => {
    return (
      <div className="absolute left-10 mt-10 ml-10">
        <div className = "p-6 max-w-sm bg-custom-white rounded-lg">
          <h1 className="text-5xl text-[#567534] pb-4">{title}</h1>
          <p className="text-xl text-[#567534]">{bodyText}</p>
        </div>
      </div>
    );
  };
  
  export default ParkTitle;