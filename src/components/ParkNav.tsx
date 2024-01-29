import React from 'react';

type NavButtonProps = {
  label: string;
  selected?: boolean;
  onClick: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold p-0 ${
        selected ? 'bg-custom-yellow' : 'bg-transparent'
      } hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
}

type NavBarProps = {
	park: string;
	page: 'History' | 'Attractions' | 'Directions';
};

const NavBar: React.FC<NavBarProps> = ({page, park}) => {
	const handleHistory = () => {
		if (page !== 'History') {
			window.location.href = `/${park}`;
		}
	}

	const handleAttractions = () => {
		if (page !== 'Attractions') {
			window.location.href = `/${park}/attractions`;
		}
	}

	const handleDirections = () => {
		if (page !== 'Directions') {
			window.location.href = `/${park}/directions`;
		}
	}
	const handleMap = () => {
		window.location.href = `/map`;
		
	}

  return (
    <div className="fixed top-0 w-full z-50 px-4 mt-2">
      <div className="bg-custom-NavBarGreen p-1 rounded-b-lg rounded-t-lg shadow-md">
        <div className="flex justify-between items-center">
          <NavButton label="← Back to Map" onClick={handleMap} />
          <div className="flex gap-2">
            <NavButton label="History" selected={page === 'History'} onClick={handleHistory} />
            <NavButton label="Attractions" selected={page === 'Attractions'} onClick={handleAttractions} />
            <NavButton label="Directions" selected={page === 'Directions'} onClick={handleDirections} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
