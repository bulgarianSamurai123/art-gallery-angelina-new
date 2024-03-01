import React from "react";
import NavLinks from "./NavLinks";

const NavigationLinks = ({ navigationLinks, router }) => {
  return (
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
  );
};

export default NavigationLinks;
