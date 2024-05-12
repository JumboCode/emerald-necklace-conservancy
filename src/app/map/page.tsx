import { useRouter } from 'next/navigation'

interface Props {}

const Map: React.FC<Props> = ({}) => {
	const router = useRouter()

	// redirect to /
	router.push('/?map=true')

	return <div></div>
}

export default Map
