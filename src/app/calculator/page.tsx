"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState<number>(0);
  const [input1st, setInput1st] = useState<number>(0);
  const [input2nd, setInput2nd] = useState<number>(0);

  const handleAdd = () => setResult(input1st + input2nd);

  return (
    <div>
      <div className="w-full h-[calc(100vh-10rem)] flex items-center justify-center">
        <div className="w-full md:w-1/2 bg-green-100 rounded-lg p-4">
          {/* Display start */}
          <div
            className="w-full bg-green-200 p-2 rounded-md text-2xl text-center"
            data-testid="calculatorDisplay"
          >
            {result}
          </div>
          {/* Display end */}
          {/* Input start */}
          <div className="flex items-center gap-2 mt-2 text-lg">
            <input
              className="w-full p-1 border-[2px] border-emerald-300 rounded-md text-black/90"
              type="number"
              onChange={(e) => {
                setInput1st(parseInt(e?.target?.value));
              }}
              data-testid="input1st"
            />
            <input
              className="w-full p-1 border-[2px] border-emerald-300 rounded-md text-black/90"
              type="number"
              onChange={(e) => {
                setInput2nd(parseInt(e?.target?.value));
              }}
              data-testid="input2nd"
            />
          </div>
          {/* Input end */}

          <div className="flex items-center gap-2 mt-2 text-2xl">
            <button
              className="w-full text-white text-xl font-semibold bg-orange-400 rounded-md p-2"
              onClick={handleAdd}
              data-testid="addBtn"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
