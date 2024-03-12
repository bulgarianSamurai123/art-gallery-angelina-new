import React, { Fragment, useState } from "react";
import Head from "next/head";

import { getGallery } from "../helpers/api-util";
import GalleryList from "../components/pages/gallery/GalleryList";
import Section from "../components/layout/Section";

const GalleryPage = ({ galleryImages }) => {
  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Gallery</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta
          name="title"
          property="og:title"
          content="Angelina's Art Gallery - Gallery"
        />
        <meta
          name="description"
          property="og:description"
          content="Check out beautifully placed paintings in the homes of hondreds of clients."
        />
        <meta
          name="url"
          property="og:url"
          content="http://angelinartgallery.com/gallery"
        />
        {galleryImages ? (
          <meta
            name="image"
            property="og:image"
            content={galleryImages[0].image}
          />
        ) : null}
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Галерия
        </h1>
        <GalleryList galleryImages={galleryImages} />
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const galleryImages = await getGallery();

  return {
    props: {
      galleryImages: galleryImages,
    },
  };
}

export default GalleryPage;
