import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";

import InputContainer from "../components/ui/form/InputContainer";
import Button from "../components/ui/Button";

const LogInPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const username = useRef();
  const password = useRef();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = username.current.value;
    const enteredPassword = password.current.value;

    if (isLogin) {
      // log user in
      const result = await signIn("credentials", {
        redirect: false,
        username: enteredUsername,
        password: enteredPassword,
      });

      if (!result.error) {
        // set some auth state
      }
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
            ref={username}
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
            ref={password}
          />
        </InputContainer>
        <div className="flex justify-end">
          <Button type="submit" onClick={switchAuthModeHandler}>Sign in</Button>
        </div>
      </form>
    </section>
  );
};

export default LogInPage;
