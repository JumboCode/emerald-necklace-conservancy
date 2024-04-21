interface Props {}

const Logout: React.FC<Props> = ({}) => {
	return (
		<div>
			<p className="text-xl">
				You have been successfully logged out. You may safely close this
				tab.
			</p>
		</div>
	)
}

export default Logout
