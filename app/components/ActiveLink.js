"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href} className={isActive ? "text-red-500 font-bold" : ""}>
      {children}
    </Link>
  );
};

export default ActiveLink;
