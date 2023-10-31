import React, { Fragment } from "react";
import Head from "next/head";

import GalleryList from "../components/pages/gallery/GalleryList";
import Section from "../components/layout/Section";

const GalleryPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Gallery</title>
        <meta
          name="description"
          content="Check out beautifully placed paintings in the homes of hondreds of clients."
        />
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Gallery Page
        </h1>
        <GalleryList />
      </Section>
    </Fragment>
  );
};

export default GalleryPage;
