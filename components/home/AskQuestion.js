import React, { useState } from "react";

import InputContainer from "../ui/InputContainer";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AskQuestion = () => {
  const [email, setEmail] = useState();
  const [question, setQuestion] = useState();

  async function submitHandler(event) {
    event.preventDefault();

    const response = await fetch("/api/questions", {
      method: "POST",
      body: {
        email: email,
        question: question,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json;

      
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const questionChangeHandler = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div className="my-32">
      <h1 className="pb-8 text-xl md:text-3xl font-normal text-left">
        Ask us a question
      </h1>
      <form onSubmit={submitHandler}>
        <InputContainer>
          <label htmlFor="email" className="text-base md:text-xl">
            Email
          </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="email"
            id="email"
            onChange={emailChangeHandler}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="question" className="text-base md:text-xl">
            Question
          </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="text"
            id="question"
            onChange={questionChangeHandler}
          />
        </InputContainer>
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestion;
