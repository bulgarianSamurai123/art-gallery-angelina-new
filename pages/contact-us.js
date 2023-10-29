import React from "react";

import ContactForm from "/components/contact-us/ContactForm";

const ContactusPage = () => {
  return (
    <section className="mx-8 lg:mx-20 xl:mx-32 mb-52">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Contact us Page
      </h1>

      <ContactForm />
    </section>
  );
};

export default ContactusPage;
