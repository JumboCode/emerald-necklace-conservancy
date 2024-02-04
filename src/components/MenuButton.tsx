'use client'
import React from 'react'
import ListIcon from '../assets/list.svg'
import Image from 'next/image'

interface MenuButtonProps {
    size: number
}

const MenuButton: React.FC<MenuButtonProps> = ({ size }) => {
    return (
        <div className="absolute top-0 left-0 mt-10 ml-10">
            <Image src={ListIcon} alt='Menu Button' width={size} height={size}/>
        </div>
    );
};

export default MenuButton;