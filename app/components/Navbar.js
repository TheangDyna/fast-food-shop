import React from "react";

// components
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className="h-[80px] bg-gray-200 flex items-center justify-between p-10">
      <p className="text-2xl font-bold">Fast.Food.Shop.</p>
      <div className="flex gap-5">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </div>
    </div>
  );
};

export default Navbar;
