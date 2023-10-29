import React from "react";
import CustomLink from "../ui/CustomLink";

const NavLinks = (props) => {
  const { href, title, router } = props;
  const isActive = router.asPath === href;

  return (
    <CustomLink dest={href} isActive={isActive}>
      {title}
    </CustomLink>
  );
};

export default NavLinks;
