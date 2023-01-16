import React from "react";

interface InputTypes {
  color: String;
  setStateValue: Function;
  testId: String;
}

const Input = ({ color, setStateValue, testId }: InputTypes) => {
  return (
    <input
      className={`w-full p-1 border-[2px] rounded-md text-black/90 ${color}`}
      type="number"
      onChange={(e) => {
        setStateValue(parseInt(e?.target?.value));
      }}
      data-testid={testId}
    />
  );
};

export default Input;
