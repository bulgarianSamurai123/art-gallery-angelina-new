import React from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

import { getProducts } from "../../../helpers/api-util";
import AddButton from "../../../components/ui/Buttons/AddButton";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Section from "../../../components/layout/Section";
import Table from "../../../components/ui/Table";

const EditProductPage = ({ products }) => {
  const router = useRouter();

  const navigateHandler = (url) => {
    router.push(url);
  };

  return (
    <Section>
      <div className="flex flex-row justify-between pb-10">
        <BackButton link='/admin' />
        <AddButton navigate={navigateHandler} buttonType='product' />
      </div>

      {/* Table */}
      <Table products={products} />
    </Section>
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

export default EditProductPage;
