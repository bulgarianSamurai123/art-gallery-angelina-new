import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import RadioPlayer from "./RadioPlayer";

const Layout = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <RadioPlayer />
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
