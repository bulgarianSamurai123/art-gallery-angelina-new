import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavDropdown from "./NavDropdown";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [active, setActive] = useState('Home');
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const isLoggedIn = true;

  const dropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <nav className="flex justify-between items-center my-4 sm:mx-4 mx-1">
      <h1 className={`text-xl font-semibold w-[9rem] text-center`}>
        Angelina's Art Gallery
      </h1>

      {/* Nav Bar Links (Displaying only in Desktop and Table mode) */}
      <NavLinks active={active} setActive={setActive} />

      {!isLoggedIn && (
        <Link
          className={`${
            active === "Sign In"
              ? "font-bold undefined"
              : "undefined hover:text-gray-570"
          } `}
          href="/sign-in"
          onClick={() => setActive("Sign In")}
        >
          Sign In
        </Link>
      )}
      {isLoggedIn && (
        <div className="md:flex hidden flex-row gap-4">
          <Link
            className={`${
              active === "Admin Pane"
                ? "font-bold undefined"
                : "undefined hover:text-gray-570"
            } `}
            href="/admin"
            onClick={() => setActive("Admin Pane")}
          >
            Admin Pane
          </Link>
          <button className="hover:text-gray-570">Sign Out</button>
        </div>
      )}

      {/* Menu Icon (Displaying only in Mobile mode) */}
      <Image
        className={`block w-8 h-auto sm:hidden ${
          toggleDropdown ? "hidden" : "block"
        }`}
        src="/assets/menu.svg"
        alt="Menu Icon"
        width={30}
        height={30}
        onClick={dropdownHandler}
      />

      {/* Toggling the Menu (With links in Mobile mode) */}
      {toggleDropdown && (
        <NavDropdown
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          isLoggedIn={isLoggedIn}
        />
      )}
    </nav>
  );
};

export default NavBar;
