import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import { getProducts } from "../../helpers/api-util";
import Section from "../../components/layout/Section";
import ProductsList from "../../components/pages/products/ProductsList";
import FilterButton from "../../components/ui/Buttons/FilterButton";
import DropDown from "../../components/ui/DropDown";
import useCheck from "../../hooks/useCheck";
import { applyFilters } from "../../helpers/filter-util";
import PaginationNum from "../../components/ui/PaginationNum";
import { filterHandler } from "../../helpers/filters";

const ProductPage = ({ products }) => {
  const [toggle, setToggle] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);
  const pageSize = 10;

  const { check: abstractChecked, toggleCheck: toggleAbstractCheck } =
    useCheck();
  const { check: faceChecked, toggleCheck: toggleFaceCheck } = useCheck();
  const { check: winterChecked, toggleCheck: toggleWinterCheck } = useCheck();
  const { check: summerChecked, toggleCheck: toggleSummerCheck } = useCheck();

  useEffect(() => {
    setPageNumber(1);
  }, [abstractChecked, faceChecked, winterChecked, summerChecked]);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const filters = filterHandler(
    toggleAbstractCheck,
    toggleFaceCheck,
    toggleWinterCheck,
    toggleSummerCheck,
    abstractChecked,
    faceChecked,
    winterChecked,
    summerChecked
  );

  const applyFiltersAndPagination = () => {
    const filteredProducts = applyFilters(
      abstractChecked,
      faceChecked,
      winterChecked,
      summerChecked,
      products
    );
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  const paginatedProducts = applyFiltersAndPagination();

  const totalPages = Math.ceil(products.length / pageSize);

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Products</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="title"
          property="og:title"
          content="Angelina's Art Gallery - Products"
        />
        <meta
          name="description"
          property="og:description"
          content="The best paintings you will find."
        />
        <meta
          name="url"
          property="og:url"
          content="http://angelinartgallery.com/products"
        />
        {products ? (
          <meta
            name="image"
            property="og:image"
            content={products[0].coverImage}
          />
        ) : null}
      </Head>
      <Section>
        <div className="flex flex-row justify-end">
          <FilterButton toggle={toggle} toggleHandler={toggleHandler} />
        </div>
        {toggle && <DropDown filters={filters} />}

        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Магазин
        </h1>
        {products.length < 1 && <p>Няма продукти</p>}
        {products.length >= 1 && <ProductsList products={paginatedProducts} />}
        <PaginationNum
          handlePreviousPage={handlePreviousPage}
          pageNumber={pageNumber}
          handleNextPage={handleNextPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
}

export default ProductPage;
