import React from "react";
import { Link } from "react-router-dom";

import rockIcon from "../assets/images/icon-rock.svg";
import paperIcon from "../assets/images/icon-paper.svg";
import scissorsIcon from "../assets/images/icon-scissors.svg";
import triangleImg from "../assets/images/bg-triangle.svg";

const Play = ({ onChoose }) => {
  return (
    <div className="flex flex-col  relative ">
      <img
        src={triangleImg}
        alt=""
        className="absolute self-center justify-self-center"
      />

      <div className="flex justify-center z-40 relative h-60">
        <Link
          to="/game"
          onClick={() => onChoose("paper")}
          className=" shadow-paper border-paper -translate-y-12 link hover:scale-110 sm:-translate-x-3 "
        >
          <img src={paperIcon} alt="paper icon" className="sm:w-10 sm:h-10" />
        </Link>
        <Link
          to="/game"
          onClick={() => onChoose("rock")}
          className="  shadow-rock border-rock translate-y-36 link hover:scale-110 sm:translate-y-44"
        >
          <img src={rockIcon} alt="rock icon" className="sm:w-10 sm:h-10" />
        </Link>
        <Link
          to="/game"
          onClick={() => onChoose("scissors")}
          className=" shadow-scissors border-scissors -translate-y-12 link hover:scale-110 sm:translate-x-3"
        >
          <img
            src={scissorsIcon}
            alt="scissors icon"
            className="sm:w-10 sm:h-10"
          />
        </Link>
      </div>
    </div>
  );
};

export default Play;

//   <div className="max-w-xl w-full mx-auto mt-12 bg-no-repeat  bg-center h-72 relative">
//     <p className=" shadow-rock-sh border-[12px] border-rock bg-gray-200 rounded-full w-32 h-32 flex justify-center items-center translate-y-44 translate-x-56">
//       <img src={rockIcon} alt="rock icon" />
//     </p>
//   </div>
