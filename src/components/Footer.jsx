import React from "react";

const Footer = ({ onShowModal }) => {
  return (
    <div className="container  flex items-center justify-between sm:flex-col-reverse pt-6 ">
      <div className=" p-3  text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"
          target="_blank"
          rel="noopener noreferrer"
          className="f--link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100053790544558"
          target="_blank"
          rel="noopener noreferrer"
          className="f--link"
        >
          Mustafa Abdullah
        </a>
      </div>
      <button
        onClick={onShowModal}
        className="uppercase  tracking-widest border-2 border-gray-100 py-2 px-4 rounded-lg hover:bg-white hover:text-blue-900  transition duration-300 ease-in-out"
      >
        Rules
      </button>
    </div>
  );
};

export default Footer;
