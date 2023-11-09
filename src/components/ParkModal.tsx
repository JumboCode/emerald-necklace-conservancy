import React from "react";

/**
 * Props for the Modal component
 * @typedef {Object} ModalProps
 * @property {string} title - The title of the modal
 * @property {string} text - The text content of the modal
 * @property {string} url - The URL of the modal
 * @property {boolean} open - Whether the modal is open or not
 */
type ModalProps = {
        title: string;
        text: string;
        url: string;
        open: boolean;
};

const Modal: React.FC<ModalProps> = ({ title, text, url, open }) => {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2 className='text-red-500' >{title}</h2>
            <p>{text}</p>
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;