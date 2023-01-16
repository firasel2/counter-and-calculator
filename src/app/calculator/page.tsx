"use client";
import React, { useState } from "react";
import NumberButton from "./NumberButton";

const Calculator = () => {
  const [result, setResult] = useState<string>("0");

  const handleAdd = () => setResult("0");

  const keys = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "C",
    "0",
    ".",
    "=",
  ];

  const handleBtnClick = (key: any) => {
    const num = parseInt(key);
    if (!Number.isNaN(num) || ["+", "-", "*", "."].includes(key)) {
      setResult((prevVal) => prevVal + key);
    } else if (key == "=") {
      setResult((prevVal) => {
        while (prevVal[0] == "0") prevVal = prevVal.slice(1);
        return eval(prevVal);
      });
    } else if (key == "C") setResult("0");
  };

  return (
    <div>
      <div className="w-full h-[calc(100vh-10rem)] flex items-center justify-center">
        <div className="w-full md:w-1/2 bg-green-100 rounded-lg p-4">
          {/* Display start */}
          <div
            className="w-full bg-green-200 p-2 rounded-md text-2xl text-end"
            data-testid="calculatorDisplay"
          >
            {result}
          </div>
          {/* Display end */}
          {/* Number and sign Button start */}
          <div className="grid grid-cols-4 gap-2 my-2">
            {keys.map((val, i) => {
              return (
                <NumberButton
                  key={i}
                  color={
                    ["+", "-", "*", "C", "="].includes(val)
                      ? "secondary-shadow"
                      : "primary-shadow"
                  }
                  text={val}
                  handleBtnClick={handleBtnClick}
                />
              );
            })}
          </div>
          {/* Number and sign Button end */}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
