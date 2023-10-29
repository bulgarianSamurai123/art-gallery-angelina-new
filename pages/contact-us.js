import React from "react";

import InputContainer from "/components/ui/InputContainer";
import Input from "/components/ui/Input";
import Button from "/components/ui/Button";

const ContactusPage = () => {
  return (
    <section className="mx-8 lg:mx-20 xl:mx-32 mb-52">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Contact us Page
      </h1>

      <form>
        <InputContainer>
          <label htmlFor="name" className="text-base md:text-xl">
            Name
          </label>
          <Input type="text" id="name" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email" className="text-base md:text-xl">
            Email
          </label>
          <Input type="email" id="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="phone" className="text-base md:text-xl">
            Phone
          </label>
          <Input type="tel" id="phone" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="message" className="text-base md:text-xl">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            rows={10}
            placeholder="Enter your message."
          />
        </InputContainer>
        <div className="flex flex-row justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default ContactusPage;
