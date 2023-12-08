import React, { useState } from 'react';
import Modal from './ParkModal';

type ButtonProps = {
  name: string;
  modalTitle: string;
  modalText: string;
  modalUrl: string;
};
const MapButton: React.FC<ButtonProps> = ({ name, modalTitle, modalText, modalUrl }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div>
      <button className="button-border" onClick={handleClick}>
        {name}
      </button>
      <Modal
        title={modalTitle}
        text={modalText}
        url={modalUrl}
        open={isModalOpen}
      />
    </div>
  );
};
export default MapButton;