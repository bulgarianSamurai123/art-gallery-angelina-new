import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../helpers/firebase";
import { isAdmin } from "../../helpers/admin-check";

import Section from "../../components/layout/Section";

const AdminPage = () => {
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

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Админ старница</title>
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Избери опция
        </h1>

        <div className="flex flex-row gap-10 justify-center mb-48">
          <motion.button
            className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
            onClick={() => navigateHandler("/admin/edit-product")}
            whileHover={{ backgroundColor: "#626262", color: "#fff" }}
          >
            Коригирай продукти
          </motion.button>
          <motion.button
            className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
            onClick={() => navigateHandler("/admin/edit-gallery")}
            whileHover={{ backgroundColor: "#626262", color: "#fff" }}
          >
            Коригирай галерни снимки
          </motion.button>
          <motion.button
            className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
            onClick={() => navigateHandler("/admin/edit-projects")}
            whileHover={{ backgroundColor: "#626262", color: "#fff" }}
          >
            Коригирай реклами
          </motion.button>
        </div>
      </Section>
    </Fragment>
  );
};

export default AdminPage;
