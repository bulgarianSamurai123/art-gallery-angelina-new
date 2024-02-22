import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useTranslation } from "next-i18next";

import { getProducts } from "../../../helpers/api-util";
import { notificationHandler } from "../../../helpers/notification-util";
import AddButton from "../../../components/ui/Buttons/AddButton";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Section from "../../../components/layout/Section";
import Table from "../../../components/ui/Table";
import Notification from "../../../components/ui/Notification";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const EditProductPage = ({ products }) => {
  const { t } = useTranslation();
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
    "remove"
  );

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Таблица с продукти</title>
      </Head>
      <Section>
        <div className="flex flex-row justify-between pb-10">
          <BackButton t={t} link="/admin" />
          <AddButton t={t} navigate={navigateHandler} buttonType="product" />
        </div>

        <Table
          t={t}
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

export async function getServerSideProps({req, locale}) {
  const products = await getProducts();
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/log-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      products: products,
      session,
      ...(await serverSideTranslations(locale))
    },
  };
}

export default EditProductPage;
