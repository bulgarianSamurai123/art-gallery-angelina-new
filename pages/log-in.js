import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";

import InputContainer from "../components/ui/form/InputContainer";
import Button from "../components/ui/Button";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(event) {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username,
      hashedPassword: password,
    });

    console.log(result);
  }

  return (
    <section className="mx-8 lg:mx-20 xl:mx-32 my-20">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Log in
      </h1>

      <form onSubmit={submitHandler}>
        <InputContainer>
          <label htmlFor="username" className="text-base md:text-xl">
            Потребителско име
          </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="text"
            id="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password" className="text-base md:text-xl">
            Парола
          </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="password"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputContainer>
        <div className="flex justify-end">
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </section>
  );
};

export default LogInPage;
