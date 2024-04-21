import getAllParks from '@/utils/getAllParks'
import Client from './Client'

interface Props {}

const Page: React.FC<Props> = async ({}) => {
	const allParks = await getAllParks()
	const popups = allParks.map((park) => {
		return {
			slug: park.slug,
			popup: park.popup,
		}
	})
	return <Client popups={popups} />
}

export default Page
