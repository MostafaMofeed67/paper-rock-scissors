import React from "react";

const Header = ({ playerScore }) => {
  return (
    <div className="container pt-12 sm:pt-3">
      <div className="border-2 uppercase border-gray-500 max-w-2xl w-full mx-auto p-5 sm:p-3 rounded-xl flex justify-between items-center">
        <div className=" text-4xl leading-7 sm:text-2xl sm:leading-5">
          <h1>Rock</h1>
          <h1>Paper</h1>
          <h1>Scissors</h1>
        </div>
        <div className="bg-gray-100 p-2 self-stretch rounded-xl w-28 text-center sm:w-24">
          <h6 className="text-blue-900 text-sm tracking-widest">Score</h6>
          <h2 className="text-5xl text-gray-600 sm:text-4xl">{playerScore}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
