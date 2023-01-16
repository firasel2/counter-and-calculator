import Link from "next/link";
import React from "react";

interface navbarBtnType {
  text: string;
  route: string;
  color: string;
}

const NavbarButton = ({ text, route, color }: navbarBtnType) => {
  return (
    <Link
      href={route}
      className={`w-full text-white text-xl text-center font-semibold rounded-md p-2 ${color}`}
    >
      {text}
    </Link>
  );
};

export default NavbarButton;
