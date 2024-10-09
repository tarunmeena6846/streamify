// NavLink.js
import React from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-gray-700 dark:text-gray-100 px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black hover:dark:text-black transition duration-300"
    >
      {children}
    </a>
  );
};

export default NavLink;
