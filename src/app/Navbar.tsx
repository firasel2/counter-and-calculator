import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto flex items-center gap-2 py-2">
      <Link
        href="/counter"
        className="w-full text-white text-xl text-center font-semibold bg-green-400 rounded-md p-2"
      >
        Counter
      </Link>
      <Link
        href="/calculator"
        className="w-full text-white text-xl text-center font-semibold bg-orange-400 rounded-md p-2"
      >
        Calculator
      </Link>
    </div>
  );
};

export default Navbar;
