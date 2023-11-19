// import { Orelega_One } from "next/font/google";
import React from 'react'

// const orelega_One = Orelega_One({
//     subsets: ['latin'],
//     weight: "400",
//     variable: '--font-orelega_One'
// });

type ParkNameProps = {
    name: string
}

const ParkName: React.FC<ParkNameProps> = ({ name }) => {
	return (
		<button className="button-border">
			{name}
		</button>
	)
}

export default ParkName