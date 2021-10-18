import React from "react";

import imgRules from "../assets/images/image-rules.svg";

const Modal = ({ onHideModal, toggleModal }) => {
  return (
    <div
      className={`fixed w-full min-h-screen bg-gray-900/80 z-50 flex justify-center items-center ${
        toggleModal ? "translate-x-0" : "-translate-x-full"
      } transition duration-300 ease-in-out `}
    >
      <div
        className={`bg-white max-w-sm w-full p-5 rounded-md space-y-8 ${
          toggleModal
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } transition duration-300 ease-in-out delay-500 relative z-[100] `}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-blue-900 text-2xl uppercase tracking-widest font-black">
            Rules
          </h2>
          <svg
            onClick={onHideModal}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gray-300 fill-current hover:text-gray-500 hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </div>
        <img src={imgRules} alt="" className="w-60 h-60 mx-auto" />
      </div>
    </div>
  );
};

export default Modal;
