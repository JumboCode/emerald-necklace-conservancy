import Link from 'next/link'
import React from 'react'

/**
 * Props for the Modal component
 * @typedef {Object} ModalProps
 * @property {string} title - The title of the modal
 * @property {string} text - The text content of the modal
 * @property {string} url - The URL of the modal
 * @property {boolean} open - Whether the modal is open or not
 */
type ModalProps = {
	title: string
	text: string
	url: string
	open: boolean
}

const Modal: React.FC<ModalProps> = ({ title, text, url, open }) => {
	return (
		<>
			{open && (
				<div className="bg-[#567534] w-[330px] rounded-[20px] py-4 px-2">
					<h2 className="text-3xl text-white text-center mt-2">
						{title}
					</h2>
					<p className="px-6 py-6  text-white">{text}</p>
					<div className="flex items-center justify-center">
						<Link
							href={url}
							className="text-lg bg-[#D6DF3D] py-4 rounded-[10px] px-8"
						>
							Check it Out
						</Link>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
