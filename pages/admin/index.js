import React, { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Section from "../../components/layout/Section";

const AdminPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const navigateHandler = (url) => {
    router.push(url);
  };

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Админ старница</title>
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          {t("admin.title")}
        </h1>

        <div className="flex flex-row gap-10 justify-center pb-20">
          <motion.button
            className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
            onClick={() => navigateHandler("/admin/edit-product")}
            whileHover={{ backgroundColor: "#626262", color: "#fff" }}
          >
            {t("admin.buttons.edit-product")}
          </motion.button>
          <motion.button
            className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
            onClick={() => navigateHandler("/admin/edit-gallery")}
            whileHover={{ backgroundColor: "#626262", color: "#fff" }}
          >
            {t("admin.buttons.edit-gallery")}
          </motion.button>
        </div>
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps({ req, locale }) {
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
    props: { session, ...(await serverSideTranslations(locale)) },
  };
}

export default AdminPage;
