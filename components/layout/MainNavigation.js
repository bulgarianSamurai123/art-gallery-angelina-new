import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/client";
import localFont from "next/font/local";

import { navigationLinks } from "../../navigationLinks";
import NavigationLinks from "../navigation/NavigationLinks";
import HamburgerMenu from "../navigation/HamburgerMenu";

const myFont = localFont({ src: "../../public/fonts/BrittanySignature.ttf" });

const NavBarDropdown = dynamic(() => import("../navigation/NavDropdown"));

const MainNavigation = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();

  const [session, loading] = useSession();

  const dropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <nav className="flex justify-between items-center my-6 mx-8 md:mx-14 lg:mx-32">
      <Link
        className={`text-2xl w-[9rem] text-center ${myFont.className}`}
        href="/"
        prefetch={false}
      >
        Angelina's Art Gallery
      </Link>

      <NavigationLinks navigationLinks={navigationLinks} router={router} />
      <HamburgerMenu toggleDropdown={toggleDropdown} dropdownHandler={dropdownHandler} />

      {toggleDropdown && (
        <NavBarDropdown
          myFont={myFont}
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          isLoggedIn={session}
          router={router}
          links={navigationLinks}
        />
      )}
    </nav>
  );
};

export default MainNavigation;
