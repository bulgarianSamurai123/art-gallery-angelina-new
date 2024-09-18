import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";

import { getGallery } from "../helpers/api-util";
import { getGalleryQuery } from "../helpers/database-queries";
import GalleryList from "../components/pages/gallery/GalleryList";
import Section from "../components/layout/Section";
import Pagination from "../components/ui/Pagination";

const GalleryPage = ({ galleryImages: gallery }) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    console.log(
      getGalleryQuery(
        currentPage,
        galleryPerPage,
        setGalleryImages,
        setTotalPages,
        setHasNextPage
      )
    );
  }, [
    currentPage,
    galleryPerPage,
  ]);

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
        {gallery ? (
          <meta name="image" property="og:image" content={gallery.image} />
        ) : null}
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Галерия
        </h1>
        <GalleryList galleryImages={galleryImages} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          hasNextPage={hasNextPage}
        />
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const galleryImages = await getGallery();

  return {
    props: {
      galleryImages: galleryImages[0],
    },
  };
}

export default GalleryPage;
