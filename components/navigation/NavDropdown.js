import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import CustomDropDownLink from "../ui/navigation/CustomDropDownLink";

const NavBarDropdown = ({
  router,
  toggleDropdown,
  setToggleDropdown,
  links,
  myFont,
}) => {
  return (
    <motion.div
      className="pt-6 absolute z-10 top-0 left-0 w-full h-1/2 bg-white md:hidden"
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex flex-row justify-between px-8">
        <h1 className={`text-2xl w-[9rem] text-center ${myFont.className}`}>
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
            closeDropdown={() => setToggleDropdown(false)}
          >
            {link.title}
          </CustomDropDownLink>
        ))}
      </div>
    </motion.div>
  );
};

export default NavBarDropdown;
