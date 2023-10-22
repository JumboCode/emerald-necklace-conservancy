/*
    Import the button from 'components/Button.tsx'
    Render the button below the h1 tag, passing it the appropriate props
*/
import Button from '../components/Button'
import "../styles/tailwind.css"


export default function Home() {
	return (
		<div>
			<h1>Emerald Necklace Button</h1>
			<Button label="Click for Weather"/>
		</div>
	)
}
