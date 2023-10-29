import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

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
