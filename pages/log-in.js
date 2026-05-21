import React, { useState } from "react";
import { useRouter } from "next/router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../helpers/firebase";

import InputContainer from "../components/ui/form/InputContainer";
import Button from "../components/ui/Button";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter()

  async function submitHandler(event) {
    event.preventDefault();

    setError("");
    
    try {
      await signInWithEmailAndPassword(auth, username, password);

      router.push("/admin");
    } catch (err) {
      setError(err.message || "Login failed");
      console.error("Login error:", err);
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

export default LogInPage;
