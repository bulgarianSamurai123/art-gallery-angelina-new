import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import CustomDropDownLink from "../ui/navigation/CustomDropDownLink";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBarDropdown = ({
  router,
  toggleDropdown,
  setToggleDropdown,
  links,
}) => {
  const t = useTranslations("Nav");

  return (
    <motion.div
      className="pt-6 absolute z-10 top-0 left-0 w-full h-96 bg-white md:hidden"
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex flex-row justify-between px-8">
        <h1 className="text-2xl w-[9rem] text-center font-brittany">
          Angelina's Art Gallery
        </h1>

        <Image
          className={`w-8 h-auto ${toggleDropdown ? "block" : "hidden"}`}
          src="/assets/close.svg"
          alt={t("close")}
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
            {t(link.key)}
          </CustomDropDownLink>
        ))}
        <LanguageSwitcher
          className="justify-center text-xl mt-2"
          onSwitch={() => setToggleDropdown(false)}
        />
      </div>
    </motion.div>
  );
};

export default NavBarDropdown;
