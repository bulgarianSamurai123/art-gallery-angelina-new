import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../helpers/firebase";
import { isAdmin } from "../../../helpers/admin-check";

import { getProducts } from "../../../helpers/api-util";
import { notificationHandler } from "../../../helpers/notification-util";
import AddButton from "../../../components/ui/Buttons/AddButton";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Section from "../../../components/layout/Section";
import Table from "../../../components/ui/Table";
import Notification from "../../../components/ui/Notification";
import Head from "next/head";

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

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/log-in");
        return;
      }

      const admin = await isAdmin(user.uid);
      if (!admin) {
        router.replace("/");
        return;
      }
    });
  }, []);

  let notification;

  notification = notificationHandler(
    requestStatus,
    notification,
    requestError,
    "remove",
  );

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Таблица с продукти</title>
      </Head>
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

export default EditProductPage;
