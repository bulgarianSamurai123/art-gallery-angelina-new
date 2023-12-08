import React, { useState } from "react";
import { getSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";

import InputContainer from "../components/ui/form/InputContainer";
import Button from "../components/ui/Button";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  async function submitHandler(event) {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    });
    console.log(result);

    if (!result.error) {
      router.replace('/admin')
    }
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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default LogInPage;
