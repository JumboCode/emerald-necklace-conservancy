interface Props {
	title: string
}

const Title: React.FC<Props> = ({ title }) => {
	return (
		<div className="bg-enc-yellow w-full h-20 flex items-center pl-12">
			<h2 className="font-questrial text-2xl text-[#33333] text-light">
				{title}
			</h2>
		</div>
	)
}

export default Title
