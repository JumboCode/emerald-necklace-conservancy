'use client'

import React from 'react';
import { useRouter } from 'next/navigation'

type MapButtonProps = {
    selected?: boolean;
    onClick: () => void;
};

type NavButtonProps = {
  label: string;
  selected?: boolean;
  onClick: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 text-sm text-xl p-0 ${
        selected ? 'bg-custom-yellow' : 'bg-transparent'
      } hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
}

type NavBarProps = {
	park: string;
	page: 'History' | 'Attractions' | 'Directions' | 'Email Signup';
};

const NavBar: React.FC<NavBarProps> = ({page, park}) => {

    const router = useRouter()

	const handleHistory = () => {
		if (page !== 'History') {
			router.push(`/${park}`);
		}
	}

	const handleAttractions = () => {
		if (page !== 'Attractions') {
			router.push(`/${park}/attractions`);
		}
	}

	const handleDirections = () => {
		if (page !== 'Directions') {
			router.push(`/${park}/directions`);
		}
	}

    const handleSignup = () => {
        if (page !== 'Email Signup') {
            router.push('/email')
        }
    }

	const handleMap = () => {
		router.push('/map')
	}

  return (
    <div className="fixed top-0 w-full z-50 px-4 mt-2">
      <div className="bg-custom-NavBarGreen p-2 rounded-b-lg rounded-t-lg shadow-md">
        <div className="flex justify-between items-center">
          <NavButton label="← Back to Map" onClick={handleMap} />
          <div className="flex gap-2">
            <NavButton label="History" selected={page === 'History'} onClick={handleHistory} />
            <NavButton label="Attractions" selected={page === 'Attractions'} onClick={handleAttractions} />
            <NavButton label="Directions" selected={page === 'Directions'} onClick={handleDirections} />
            <NavButton label="Signup" selected={page ==='Email Signup'} onClick={handleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
