'use client'

import react from 'react'

const BackButton = () => {
    const handleClick = () => {
        window.location.href = `/map`;
    }

    return (
        <div className = "fixed top-0 left-0 p-1">
            <div className="bg-custom-NavBarGreen p-2 rounded-b-lg rounded-t-lg shadow-md">
            <button onClick={handleClick} style={{ color: 'white', fontSize: '20px', padding: '10px 10px' }}> 
      Back to Map
    </button> 
            </div>
        </div>
    )
}

export default BackButton;