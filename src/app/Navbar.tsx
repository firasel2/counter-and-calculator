import Link from "next/link";
import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto flex items-center gap-2 py-2">
      <NavbarButton color="primary" text="Counter" route="/counter" />
      <NavbarButton color="secondary" text="Calculator" route="/calculator" />
    </div>
  );
};

export default Navbar;
