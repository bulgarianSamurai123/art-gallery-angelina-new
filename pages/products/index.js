import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Section from "../../components/layout/Section";
import ProductsList from "../../components/pages/products/ProductsList";
import FilterButton from "../../components/ui/Buttons/FilterButton";
import DropDown from "../../components/ui/DropDown";
import useCheck from "../../hooks/useCheck";
import Pagination from "../../components/ui/Pagination";
import { getProducts } from "../../helpers/api-util";
import { applyFilters } from "../../helpers/filter-util";
import {
  getProductsQuery,
  productFilters,
} from "../../helpers/database-queries";

const ProductPage = ({ products: firstProduct }) => {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();
  const { page } = router.query;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [productsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  const { check: abstractChecked, toggleCheck: toggleAbstractCheck } =
    useCheck();
  const { check: faceChecked, toggleCheck: toggleFaceCheck } = useCheck();
  const { check: winterChecked, toggleCheck: toggleWinterCheck } = useCheck();
  const { check: summerChecked, toggleCheck: toggleSummerCheck } = useCheck();

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const filters = [
    {
      name: "Абстракций",
      check: abstractChecked,
      toggleCheck: toggleAbstractCheck,
    },
    {
      name: "Лица",
      check: faceChecked,
      toggleCheck: toggleFaceCheck,
    },
    {
      name: "Зима",
      check: winterChecked,
      toggleCheck: toggleWinterCheck,
    },
    {
      name: "Лято",
      check: summerChecked,
      toggleCheck: toggleSummerCheck,
    },
  ];

  useEffect(() => {
    getProductsQuery(
      currentPage,
      productsPerPage,
      setProducts,
      setTotalPages,
      setHasNextPage,
      abstractChecked,
      faceChecked,
      winterChecked,
      summerChecked
    );
  }, [
    currentPage,
    productsPerPage,
    abstractChecked,
    faceChecked,
    winterChecked,
    summerChecked,
  ]);

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Products</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
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
        {firstProduct ? (
          <meta
            name="image"
            property="og:image"
            content={firstProduct.coverImage}
          />
        ) : null}
      </Head>
      <Section>
        <div className="flex flex-row justify-end">
          <FilterButton toggle={toggle} toggleHandler={toggleHandler} />
        </div>
        {toggle && <DropDown filters={filters} />}

        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Творби
        </h1>
        {products.length < 1 && <p>Зарежда се...</p>}
        {products.length >= 1 && (
          <ProductsList products={products} currentPage={currentPage} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={(page) => {
            setCurrentPage(page);
            router.push(`/products?page=${page}`);
          }}
          hasNextPage={hasNextPage}
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
