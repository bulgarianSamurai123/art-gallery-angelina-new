import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import NavLinks from "../navigation/NavLinks";
import CustomLink from "../ui/navigation/CustomLink";
import NavBarDropdown from "../navigation/NavDropdown";
import { navigationLinks } from "../../navigationLinks";

const MainNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();

  const dropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <nav className="flex justify-between items-center my-6 mx-8 sm:mx-14 md:mx-32">
      <Link className="text-2xl w-[9rem] text-center font-brittany" href="/">
        Angelina's Art Gallery
      </Link>

      <ul className="hidden sm:flex flex-row gap-5">
        {navigationLinks.map((link) => (
          <NavLinks
            key={link.id}
            href={link.destination}
            title={link.title}
            router={router}
          />
        ))}
      </ul>

      <div className="flex flex-row gap-5 items-center">
        {!isLoggedIn && (
          <CustomLink dest="/log-in" isActive={router.asPath === "/log-in"}>
            Влез
          </CustomLink>
        )}

        {isLoggedIn && (
          <div className="flex flex-row gap-5">
            <CustomLink
              dest="/"
              isActive={router.asPath === "/sign-out"}
            >
              Излез
            </CustomLink>
            <CustomLink dest="/admin" isActive={router.asPath === "/admin"}>
              Админ страница
            </CustomLink>
          </div>
        )}

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
      </div>

      {toggleDropdown && (
        <NavBarDropdown
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          isLoggedIn={isLoggedIn}
          router={router}
          links={navigationLinks}
        />
      )}
    </nav>
  );
};

export default MainNavigation;
