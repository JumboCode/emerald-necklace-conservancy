import Section from '@/components/admin/Section'

interface Props {}

const Directions: React.FC<Props> = ({}) => {
	return (
		<div className="w-full bg-[#333333]">
			<div className="bg-enc-yellow w-full h-20 flex items-center pl-12">
				<h2 className="font-questrial text-2xl text-[#33333] text-light">
					Franklin Park — Directions
				</h2>
			</div>
			<Section title="General Description" />
			<Section title="By Walking" />
			<Section title="By Driving" />
			<Section title="By Transit" />
		</div>
	)
}

export default Directions
