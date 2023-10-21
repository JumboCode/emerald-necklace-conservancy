/*
    Import the button from 'components/Button.tsx'
    Render the button below the h1 tag, passing it the appropriate props
*/
"use client";
import MyButton from "/src/components/Button.tsx";


export default function Home() {
	

    return (
		<div class="p-6 max-w-xs mx-auto bg-white rounded-xl shadow-lg flex justify-center">
			{
                <h1>
                    <MyButton label="Emerald Necklace Button!" />
                </h1>
			}
		</div>
	)
}
