import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBarDropdown = (props) => {
  return (
    <div className="absolute z-10 top-10 left-0 w-full h-1/2 bg-white sm:hidden">
      <div className="flex flex-row justify-between px-[1.5rem]">
        <h1 className="text-xl font-semibold w-[9rem] text-center">
          Angelina's Art Gallery
        </h1>

        <Image
          className={`w-8 h-auto ${props.toggleDropdown ? "block" : "hidden"}`}
          src="/assets/close.svg"
          alt="Close Icon"
          width={30}
          height={30}
          onClick={() => props.setToggleDropdown(false)}
        />
      </div>
      <div className="flex flex-col gap-3 mt-4 w-full text-center">
        <Link className="text-xl hover:text-gray-570" href="/">
          Home
        </Link>
        <Link className="text-xl hover:text-gray-570" href="/products">
          Products
        </Link>
        <Link className="text-xl hover:text-gray-570" href="/contact-us">
          Contact us
        </Link>
        <Link className="text-xl hover:text-gray-570" href="/gallery">
          Gallery
        </Link>
        {/* <div className="m-5">
          {!props.isLoggedIn && (
            <Link className="text-xl hover:text-gray-570" href="/sign-in">
              Sign In
            </Link>
          )}
          {props.isLoggedIn && (
            <div className="flex flex-col gap-2">
              <Link className="text-xl hover:text-gray-570" href="/admin">
                Admin Pane
              </Link>
              <Link className="text-xl hover:text-gray-570" href="/sign-in">
                Sign Out
              </Link>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default NavBarDropdown;
