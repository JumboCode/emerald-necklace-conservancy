'use client'
import React from 'react'


enum AttractionNumberSize {
    small = 'small',
    large = 'large'
}
interface AttractionNumber {
    number: number,
    size: AttractionNumberSize
}

const AttractionNumber: React.FC<AttractionNumber> = ({ number }) => {
    return (
        <div className="absolute top-0 left-0 mt-10 ml-10">
            <div className="p-6 max-w-sm">
                <h1 className="text-2xl font-semibold mb-4">{number}</h1>
            </div>
        </div>
    );
};

export default AttractionNumber;