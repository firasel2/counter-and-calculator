"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleIncrement = () => setCounter((prevVal) => prevVal + 1);
  const handleDecrement = () => setCounter((prevVal) => prevVal - 1);

  return (
    <div>
      <div className="w-full h-[calc(100vh-10rem)] flex items-center justify-center">
        <div className="w-full md:w-1/2 bg-green-100 rounded-lg p-4">
          {/* Display start */}
          <div
            className="w-full bg-green-200 p-2 rounded-md text-2xl text-center"
            data-testid="display"
          >
            {counter}
          </div>
          {/* Display end */}
          {/* Control button start */}
          <div className="flex items-center gap-2 mt-2 text-2xl">
            <button
              className="w-full p-2 rounded-md bg-emerald-300 text-black/50"
              onClick={handleIncrement}
              data-testid="increment"
            >
              +
            </button>
            <button
              className="w-full p-2 rounded-md bg-orange-300 text-black/50"
              onClick={handleDecrement}
              data-testid="decrement"
            >
              -
            </button>
          </div>
          {/* Control button end */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
