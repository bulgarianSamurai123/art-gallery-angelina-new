import React from "react";

const Section = ({ className, children }) => {
  return <section className={`${className} mx-8 lg:mx-20 xl:mx-32 xl:mt-20 xl:mb-40 overflow-hidden`}>{children}</section>;
};

export default Section;
