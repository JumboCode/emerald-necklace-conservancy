import Client from './Client'

import { ParkPopups } from '@/types'
import getParkPopups from '@/actions/getParkPopups'

interface Props {}

const Map: React.FC<Props> = async ({}) => {
	const text: ParkPopups = await getParkPopups()
	return <Client text={text} />
}

export default Map
