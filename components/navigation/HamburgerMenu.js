import React from "react";
import Image from "next/image";

const HamburgerMenu = ({toggleDropdown, dropdownHandler}) => {
  return (
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
    </div>
  );
};

export default HamburgerMenu;
