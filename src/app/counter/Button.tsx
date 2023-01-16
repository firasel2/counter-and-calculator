import React, { MouseEventHandler } from "react";

interface ButtonTypes {
  handleClick: MouseEventHandler;
  text: string;
  color: string;
}

const Button = ({ handleClick, text, color }: ButtonTypes) => {
  return (
    <button
      className={`w-full p-2 rounded-md text-black/50 ${color}`}
      onClick={handleClick}
      data-testid="decrement"
    >
      {text}
    </button>
  );
};

export default Button;
