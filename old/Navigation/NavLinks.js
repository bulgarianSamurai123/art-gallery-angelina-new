import React, { useState } from "react";
import Link from "next/link";

const NavLinks = (props) => {
  return (
    <ul className="sm:flex hidden flex-row gap-6">
      <li
        className={`${
          props.active === "Home"
            ? "font-bold undefined"
            : "undefined hover:text-gray-570"
        } `}
      >
        <Link href="/" onClick={() => props.setActive("Home")}>
          Home
        </Link>
      </li>
      <li
        className={`${
            props.active === "Products"
            ? "font-bold undefined"
            : "undefined hover:text-gray-570"
        } `}
      >
        <Link href="/products" onClick={() => props.setActive("Products")}>
          Products
        </Link>
      </li>
      <li className={`${
          props.active === "Contact us"
            ? "font-bold undefined"
            : "undefined hover:text-gray-570"
        } `}>
        <Link href="/contact-us" onClick={() => props.setActive("Contact us")}>
          Contact us
        </Link>
      </li>
      <li className={`${
          props.active === "Gallery"
            ? "font-bold undefined"
            : "undefined hover:text-gray-570"
        } `}>
        <Link href="/gallery" onClick={() => props.setActive("Gallery")}>
          Gallery
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
