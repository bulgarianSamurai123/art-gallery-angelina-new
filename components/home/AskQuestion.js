import React from "react";

import InputContainer from "../ui/InputContainer";
import addQuestion from "/helpers/add-question-util";
import useInput from "../../hooks/use-input";

const AskQuestion = () => {
  const {
    value: email,
    invalidInput: invalidEmailHandler,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));
  const {
    value: question,
    invalidInput: invalidQuestionHandler,
    valueIsValid: enteredQuestionIsValid,
    valueChangeHandler: questionInputHandler,
    inputBlurHandler: questionInputBlurHandler,
    reset: resetQuestionHandler,
  } = useInput((value) => value.trim() !== "");

  const date = new Date();

  let formIsValid = false;

  if (enteredEmailIsValid && enteredQuestionIsValid) {
    formIsValid = true;
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredQuestionIsValid) {
      return;
    }

    const newQuestion = {
      date,
      email,
      question,
    };

    addQuestion(newQuestion);

    resetEmailHandler();
    resetQuestionHandler();
  }

  return (
    <div className="my-32">
      <h1 className="pb-8 text-xl md:text-3xl font-normal text-left">
        Ask us a question
      </h1>
      <form onSubmit={submitHandler}>
        <InputContainer>
          <label
            htmlFor="email"
            className={`${
              invalidEmailHandler ? "text-red-600" : "undefined"
            } text-base md:text-xl`}
          >
            Email
          </label>
          <input
            className={`${
              invalidEmailHandler
                ? "border-red-600 focus:border-red-600"
                : "border-gray-850 focus:border-gray-850"
            } border-2 rounded-lg  p-2 text-sm outline-none focus:border-4 `}
            type="email"
            id="email"
            value={email}
            onChange={emailInputHandler}
            onBlur={emailInputBlurHandler}
          />
          {invalidEmailHandler && (
            <p className="text-red-600 font-bold">
              Entered email must not be empty!
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label
            htmlFor="question"
            className={`${
              invalidQuestionHandler ? "text-red-600" : "undefined"
            } text-base md:text-xl`}
          >
            Question
          </label>
          <input
            className={`${
              invalidQuestionHandler
                ? "border-red-600 focus:border-red-600"
                : "border-gray-850 focus:border-gray-850"
            } border-2 rounded-lg p-2 text-sm outline-none focus:border-4 focus:border-gray-850`}
            type="text"
            id="question"
            value={question}
            onChange={questionInputHandler}
            onBlur={questionInputBlurHandler}
          />
          {invalidQuestionHandler && (
            <p className="text-red-600 font-bold">
              Entered question must not be empty!
            </p>
          )}
        </InputContainer>
        <div className="flex justify-end">
          <button
            className={`mt-3 bg-gray-730 hover:bg-gray-800 active:bg-gray-600 disabled:text-gray-490 px-7 py-2 rounded-xl`}
            type="submit"
            disabled={!formIsValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestion;
