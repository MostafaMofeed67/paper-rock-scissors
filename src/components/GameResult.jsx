/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import paperIcon from "../assets/images/icon-paper.svg";
import rockIcon from "../assets/images/icon-rock.svg";
import scissorsIcon from "../assets/images/icon-scissors.svg";

const game = [
  {
    name: "paper",
    src: paperIcon,
  },
  {
    name: "rock",
    src: rockIcon,
  },
  {
    name: "scissors",
    src: scissorsIcon,
  },
];

const gameNames = ["paper", "rock", "scissors"];

const GameResult = ({ myChoice, setPlayerScore }) => {
  const [playerStatus, setPlayerStatus] = useState("");
  const [house, setHouse] = useState("");
  const [counter, setCounter] = useState(3);

  const houseName = () => {
    setHouse(gameNames[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    houseName();
  }, []);

  const gameResult = () => {
    if (myChoice === "paper" && house === "scissors") {
      setPlayerStatus("You Lose");
      setPlayerScore((prevScore) => prevScore - 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerStatus("You Win");
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerStatus("You Lose");
      setPlayerScore((prevScore) => prevScore - 1);
    } else if (myChoice === "rock" && house === "scissors") {
      setPlayerStatus("You Win");
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerStatus("You Win");
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerStatus("You Lose");
      setPlayerScore((prevScore) => prevScore - 1);
    } else {
      setPlayerStatus("Draw");
    }
  };

  const playerChoose = game.filter((game) => game.name === myChoice);
  const houseChoose = game.filter((game) => game.name === house);

  useEffect(() => {
    const timer =
      counter > 0
        ? setTimeout(() => {
            setCounter((prevState) => prevState - 1);
          }, 1000)
        : gameResult();

    return () => clearTimeout(timer);
  }, [house, counter]);

  if (house === "") return "Loading ...";
  if (myChoice === "")
    return (
      <div className="max-w-md w-full p-5 shadow-md bg-gray-200 rounded">
        <h1 className="text-blue-800 text-2xl">Something went wrong</h1>
        <Link
          to="/"
          className="uppercase border-2 inline-block border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded py-2 px-5  text-sm tracking-widest mt-5 transition duration-300 ease-in-out"
        >
          Play again
        </Link>
      </div>
    );

  const playerWin = playerStatus === "You Win" ? `${myChoice}--winner` : "";
  const playerLose = playerStatus === "You Lose" ? `${house}--winner` : "";

  return (
    <div className="flex justify-between max-w-2xl w-full mx-auto uppercase tracking-widest  items-center sm:flex-col sm:gap-8 ">
      <div className="flex justify-center flex-col text-center">
        <h2 className="font-bold text-lg sm:text-base">You Picked</h2>
        <div
          className={`shadow-${myChoice} ${playerWin}  border-${myChoice}  link mt-12 sm:mt-4`}
        >
          <img
            src={playerChoose[0].src}
            alt="paper icon"
            className="sm:w-10 sm:h-10"
          />
        </div>
      </div>
      <div className="text-center">
        <div
          className={`${
            counter === 0 ? "opacity-100 scale-100 " : "opacity-0 scale-50"
          } transition duration-300 ease-in-out`}
        >
          <h1 className="font-black text-5xl mb-5 sm:mb-3 sm:text-3xl">
            {playerStatus}
          </h1>
          <Link
            to="/"
            className={`uppercase inline-block bg-white text-blue-800 rounded py-2 px-6 w-full text-sm tracking-widest hover:text-rock`}
          >
            Play again
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-col text-center">
        <h2 className="font-bold text-lg sm:text-base">The House Picked </h2>
        {counter === 0 ? (
          <div
            className={` shadow-${house} border-${house} ${playerLose} link mt-12 mx-auto sm:mt-4 `}
          >
            <img
              src={houseChoose[0].src}
              alt="paper icon"
              className="sm:w-10 sm:h-10"
            />
          </div>
        ) : (
          <div className="mt-12 mx-auto sm:mt-4  w-36 h-36 sm:w-24 sm:h-24 bg-black/40 rounded-full flex justify-center items-center">
            <p className="font-black text-6xl sm:text-4xl">{counter}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameResult;
