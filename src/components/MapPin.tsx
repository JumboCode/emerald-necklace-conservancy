"use client"
import React from 'react';

interface MapPinProps {
  size: number;
}

export default function MapPin ({ size } : {size:any}) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'purple',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Color for the text inside the pin
      }}
    >
      P
    </div>
  );
};