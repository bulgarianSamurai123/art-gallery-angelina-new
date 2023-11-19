import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

import { getProducts } from "../../../helpers/api-util";
import { notificationHandler } from "../../../helpers/notification-util";
import AddButton from "../../../components/ui/Buttons/AddButton";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Section from "../../../components/layout/Section";
import Table from "../../../components/ui/Table";
import Notification from "../../../components/ui/Notification";

const EditProductPage = ({ products }) => {
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const router = useRouter();

  const navigateHandler = (url) => {
    router.push(url);
  };

  let notification;

  notification = notificationHandler(
    requestStatus,
    notification,
    requestError,
    'remove'
  );

  return (
    <Section>
      <div className="flex flex-row justify-between pb-10">
        <BackButton link="/admin" />
        <AddButton navigate={navigateHandler} buttonType="product" />
      </div>

      {/* Table */}
      <Table
        products={products}
        setRequestStatus={setRequestStatus}
        setRequestError={setRequestError}
      />

      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
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
