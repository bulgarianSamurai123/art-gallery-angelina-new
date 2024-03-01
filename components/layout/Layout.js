import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const MainNavigation = dynamic(() => import("./MainNavigation"))
const Footer = dynamic(() => import("./Footer"))

const Layout = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
