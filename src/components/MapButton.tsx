'use client'

import react from 'react'

const MapButton = () => {
    const handleClick = () => {
        window.location.href = `/email`;
    }

    return (
        <div className = "fixed bottom-0 right-0 p-1">
            <div className="bg-custom-NavBarGreen p-2 rounded-b-lg rounded-t-lg shadow-md">
            <button onClick={handleClick} style={{ color: 'white', fontSize: '20px', padding: '10px 10px' }}> 
      SIGNUP
    </button> 
            </div>
        </div>
    )
}

export default MapButton;