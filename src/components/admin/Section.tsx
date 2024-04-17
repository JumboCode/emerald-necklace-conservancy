interface Props {
	title: string
	id: string
	defaultValue: string
}

const Section: React.FC<Props> = ({ title, id, defaultValue }) => {
	return (
		<div>
			<div className="bg-enc-light-green w-full h-12 flex items-center pl-12">
				<h2 className="font-questrial text-2xl text-[#33333] text-light">
					{title}
				</h2>
			</div>
			<input
				className="bg-transparent w-full font-questrial text-white text-lg  p-4 focus:outline-none"
				id={id}
				name={id}
				type="text"
				placeholder=""
				defaultValue={defaultValue}
				required
			></input>
		</div>
	)
}

export default Section
