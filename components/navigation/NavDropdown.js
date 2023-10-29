import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomDropDownLink from "../ui/CustomDropDownLink";

const NavBarDropdown = (props) => {
  const { router, toggleDropdown, setToggleDropdown, isLoggedIn, links } =
    props;

  return (
    <div className="pt-4 absolute z-10 top-0 left-0 w-full h-1/2 bg-white sm:hidden">
      <div className="flex flex-row justify-between px-8">
        <h1 className="text-xl font-semibold w-[9rem] text-center">
          Angelina's Art Gallery
        </h1>

        <Image
          className={`w-8 h-auto ${toggleDropdown ? "block" : "hidden"}`}
          src="/assets/close.svg"
          alt="Close Icon"
          width={30}
          height={30}
          onClick={() => setToggleDropdown(false)}
        />
      </div>
      <div className="flex flex-col gap-3 mt-4 w-full text-center">
        {links.map((link) => (
          <CustomDropDownLink
            key={link.id}
            router={router}
            destination={link.destination}
            closeDropdown={setToggleDropdown}
          >
            {link.title}
          </CustomDropDownLink>
        ))}
        <div className="m-5">
          {!isLoggedIn && (
            <CustomDropDownLink router={router} destination="/sign-in">
              Sign up
            </CustomDropDownLink>
          )}
          {isLoggedIn && (
            <div className="flex flex-col gap-2">
              <CustomDropDownLink router={router} destination="/admin">
                Admin Page
              </CustomDropDownLink>
              <CustomDropDownLink router={router} destination="/">
                Sign Out
              </CustomDropDownLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarDropdown;
