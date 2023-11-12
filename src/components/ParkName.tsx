import React from 'react';

type ParkNameProps = {
  name: string;
};

const ParkName: React.FC<ParkNameProps> = ({ name }) => {
  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
      <h1 style={{ color: 'black' }}>{name}</h1>
    </div>
  );
};

export default ParkName;
