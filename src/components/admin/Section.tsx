interface Props {
	title: string
	id: string
	defaultValue: string
}

const Section: React.FC<Props> = ({ title, id, defaultValue }) => {
	return (
		<div className="bg-[#333333]">
			<div className="bg-enc-light-green w-full h-12 flex items-center pl-12">
				<h2 className="font-questrial text-2xl text-[#33333] text-light">
					{title}
				</h2>
			</div>
			<textarea
				className="bg-transparent w-full font-questrial text-white text-lg  p-4 focus:outline-none"
				id={id}
				name={id}
				// type="text"
				placeholder=""
				defaultValue={defaultValue}
				required
				rows={3}
			></textarea>
		</div>
	)
}

export default Section

export const SectionWithTitle: React.FC<Props> = ({
	title,
	id,
	defaultValue,
}) => {
	return (
		<div className="bg-[#333333]">
			<div className="bg-enc-light-green w-full h-12 flex items-center pl-12">
				<input
					id={`${id}-title`}
					name={`${id}-title`}
					className="bg-transparent w-full font-questrial text-[#33333] text-2xl focus:outline-none placeholder:text-gray-500"
					required
					placeholder="title"
					defaultValue={title}
				/>
			</div>
			<textarea
				className="bg-transparent w-full font-questrial text-white text-lg  p-4 focus:outline-none placeholder:text-gray-500"
				id={id}
				name={id}
				// type="text"
				placeholder="description"
				defaultValue={defaultValue}
				required
				rows={3}
			></textarea>
		</div>
	)
}
