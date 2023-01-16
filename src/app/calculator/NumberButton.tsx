import React, { MouseEventHandler } from "react";

interface NumberButtonTypes {
  text: string;
  color: string;
  handleBtnClick: Function;
}

const NumberButton = ({ text, color, handleBtnClick }: NumberButtonTypes) => {
  return (
    <button
      className={`text-center font-semibold p-2 rounded-md text-white ${color}`}
      onClick={() => handleBtnClick(text)}
    >
      {text}
    </button>
  );
};

export default NumberButton;
