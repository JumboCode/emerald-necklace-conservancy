/*
    Import the button from 'components/Button.tsx'
    Render the button below the h1 tag, passing it the appropriate props
*/
import Button from '../components/Button.tsx';

export default function Home() {
  const loading = 'Load Weather Data'; // Assuming loading is a string that represents the button label

  return (
    <div>
      <h1>Emerald Necklace Button</h1>
      <Button label={loading} />
    </div>
  );
}
