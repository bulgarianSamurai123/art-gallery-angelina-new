import React, { Fragment } from "react";

import ContactForm from "/components/pages/contact-us/ContactForm";
import Section from "../components/layout/Section";
import Head from "next/head";

const ContactusPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Contact us</title>
        <meta name="description" content="Contact us for any information or to make a porachka." />
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Contact us Page
        </h1>

        <ContactForm />
      </Section>
    </Fragment>
  );
};

export default ContactusPage;
