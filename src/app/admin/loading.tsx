import React from 'react'
import MenuBar from '@/components/admin/MenuBar'
import { PuffLoader } from 'react-spinners'

interface Props {}

const Loading: React.FC<Props> = ({}) => {
	return (
		<div className="h-full w-full">
			<div className="">
				<MenuBar id={''} saving={false} />
			</div>
			<div className="flex items-center justify-center w-full h-full">
				<PuffLoader color="#567534" />
			</div>
		</div>
	)
}

export default Loading
