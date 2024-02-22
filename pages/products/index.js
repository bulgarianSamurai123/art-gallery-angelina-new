import React, { Fragment, useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getProducts } from "../../helpers/api-util";
import Section from "../../components/layout/Section";
import ProductsList from "../../components/pages/products/ProductsList";
import FilterButton from "../../components/ui/Buttons/FilterButton";
import DropDown from "../../components/ui/DropDown";
import useCheck from "../../hooks/useCheck";
import { applyFilters } from "../../helpers/filter-util";

const ProductPage = ({ products }) => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);

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
      name: t("shop.filter.abstractions"),
      check: abstractChecked,
      toggleCheck: toggleAbstractCheck,
    },
    {
      name: t("shop.filter.faces"),
      check: faceChecked,
      toggleCheck: toggleFaceCheck,
    },
    {
      name: t("shop.filter.winter"),
      check: winterChecked,
      toggleCheck: toggleWinterCheck,
    },
    {
      name: t("shop.filter.summer"),
      check: summerChecked,
      toggleCheck: toggleSummerCheck,
    },
  ];

  const filteredProducts = applyFilters(
    abstractChecked,
    faceChecked,
    winterChecked,
    summerChecked,
    products
  );

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
          <FilterButton t={t} toggle={toggle} toggleHandler={toggleHandler} />
        </div>
        {toggle && <DropDown filters={filters} />}

        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          {t("shop.title")}
        </h1>
        {products.length < 1 && <p>{t("shop.no-products")}</p>}
        {products.length >= 1 && <ProductsList products={filteredProducts} />}
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps({ locale }) {
  const products = await getProducts();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      products: products,
    },
  };
}

export default ProductPage;
