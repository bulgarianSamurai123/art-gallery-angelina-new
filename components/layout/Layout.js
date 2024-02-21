import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
