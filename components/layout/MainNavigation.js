import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";

import NavLinks from "../navigation/NavLinks";
import NavBarDropdown from "../navigation/NavDropdown";

import localFont from "next/font/local";
import LanguageSwitcher from "../ui/LanguageSwitcher";
const myFont = localFont({ src: "../../public/fonts/BrittanySignature.ttf" });

const MainNavigation = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();

  const { t } = useTranslation();

  const navigationLinks = [
    {
      id: "home",
      destination: "/",
      title: t("navigation.title.home"),
    },
    {
      id: "products",
      destination: "/products",
      title: t("navigation.title.products"),
    },
    {
      id: "contact-us",
      destination: "/contact-us",
      title: t("navigation.title.contact-us"),
    },
    {
      id: "gallery",
      destination: "/gallery",
      title: t("navigation.title.gallery"),
    },
  ];

  const [session, loading] = useSession();

  const dropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <nav className="flex justify-between items-center my-6 mx-8 md:mx-14 lg:mx-32">
      <Link
        className={`text-2xl w-[9rem] text-center ${myFont.className}`}
        href="/"
      >
        Angelina's Art Gallery
      </Link>

      <ul className="hidden md:flex flex-row gap-5">
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
        <Image
          className={`block w-8 h-auto md:hidden ${
            toggleDropdown ? "hidden" : "block"
          }`}
          src="/assets/menu.svg"
          alt="Menu Icon"
          width={30}
          height={30}
          onClick={dropdownHandler}
        />

        <LanguageSwitcher />
      </div>

      {toggleDropdown && (
        <NavBarDropdown
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
