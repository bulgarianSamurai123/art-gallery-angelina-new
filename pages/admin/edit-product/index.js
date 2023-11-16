import React from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

import { getProducts } from "../../../helpers/api-util";
import Section from "../../../components/layout/Section";
import Table from "../../../components/ui/Table";
import AddButton from "../../../components/ui/Buttons/AddButton";

const EditProductPage = ({ products }) => {
  const router = useRouter();

  const navigateHandler = (url) => {
    router.push(url);
  };

  return (
    <Section>
      <div className="flex flex-row justify-end pb-10">
        <AddButton navigate={navigateHandler} />
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
