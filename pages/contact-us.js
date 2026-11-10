import React, { Fragment } from "react";
import Head from "next/head";
import { useTranslations } from "next-intl";

import ContactForm from "../components/pages/contact-us/ContactForm";
import Section from "../components/layout/Section";

const ContactusPage = () => {
  const t = useTranslations("Contact");
  const tMeta = useTranslations("Meta");

  return (
    <Fragment>
      <Head>
        <title>{tMeta("contactTitle")}</title>
        <meta
          name="description"
          content={tMeta("contactDescription")}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          {t("title")}
        </h1>

        <ContactForm />
      </Section>
    </Fragment>
  );
};

export default ContactusPage;
