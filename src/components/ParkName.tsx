import React from 'react'

type ParkNameProps = {
	name: string
}

const ParkName: React.FC<ParkNameProps> = ({ name }) => {
	return (
		<div className="bg-[#D6DF3D] px-4 py-4 rounded-[15px] w-[250px]">
			<h1 className="text-black text-center text-lg font-bold">{name}</h1>
		</div>
	)
}

export default ParkName
