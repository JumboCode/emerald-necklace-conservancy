// import { Orelega_One } from "next/font/google";
import React, {useState} from 'react'
import ParkModal from '@/components/ParkModal'


// const orelega_One = Orelega_One({
//     subsets: ['latin'],
//     weight: "400",
//     variable: '--font-orelega_One'
// });
enum park {
    Franklin_Park,
    Arnold_Arboretum,
    Jamaica_Pond,
    Olmsted_Park,
    Riverway,
    Back_Bay
}

type ParkNameProps = {
  name: string;
	text: string;
	open: boolean[];
	setOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
	index: number;
}

const ParkName: React.FC<ParkNameProps> = ({ name, text, open, setOpen, index }) => {
	const handleClick = () => {
		const updatedStates = open.map((state, i) => (i === index ? !state : false));
    	setOpen(updatedStates);

		// sets window to prop name with spaces replaced with "-"
		// window.location.href = `/${name.replace(/\s/g, "-").toLowerCase()}`;
	}

	return (
		<>
			<button 
				className="button-border"
				onClick={handleClick}>
				{name}
			</button>
			<ParkModal title={name} url={`/${name.replace(/\s/g, "-").toLowerCase()}`} text={text} open={open[index]}/>
		</>
	)
}


export default ParkName