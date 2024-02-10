import React from "react";

const Modal = ({ onClose, image, text }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 flex flex-col items-center rounded-xl gap-5">
        <button onClick={onClose}>
          <img src="/assets/close.svg" alt="Close Btn" />
        </button>
        <img className="w-96" src={image} alt={text} />
        <p className="w-72 text-center">{text}</p>
      </div>
    </div>
  );
};

export default Modal;
