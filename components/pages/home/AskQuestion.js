import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import useInput from "../../../hooks/use-input";
import { notificationHandler } from "../../../helpers/notification-util";
import Input from "../../ui/form/Input";
import Notification from "../../ui/Notification";
import { sendContactForm } from "../../../helpers/api-util";

const AskQuestion = () => {
  const {
    value: email,
    invalidInput: invalidEmailHandler,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"), "");
  const {
    value: question,
    invalidInput: invalidQuestionHandler,
    valueIsValid: enteredQuestionIsValid,
    valueChangeHandler: questionInputHandler,
    inputBlurHandler: questionInputBlurHandler,
    reset: resetQuestionHandler,
  } = useInput((value) => value.trim() !== "", "");

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const date = new Date();

  let formIsValid = false;

  if (enteredEmailIsValid && enteredQuestionIsValid) {
    formIsValid = true;
  }

  async function submitHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    if (!enteredEmailIsValid || !enteredQuestionIsValid) {
      return;
    }

    try {
      const newQuestion = {
        date,
        email,
        question,
      };

      try {
        await sendContactForm(newQuestion);
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }

      // addMessage(newQuestion, "questions");
      setRequestStatus("success");

      resetEmailHandler();
      resetQuestionHandler();
    } catch (error) {
      setRequestError(error);
      setRequestStatus("error");
    }
  }

  let notification;
  notification = notificationHandler(
    requestStatus,
    notification,
    requestError,
    "contact"
  );

  return (
    <div className="mt-20 mb-32">
      <h1 className="pb-8 text-xl md:text-3xl font-normal text-left">
        Задайте ни въпрос
      </h1>
      <form onSubmit={submitHandler}>
        <Input
          for="email"
          invalidPropHandler={invalidEmailHandler}
          label="Имейл"
          type="email"
          val={email}
          inputHandler={emailInputHandler}
          blurHandler={emailInputBlurHandler}
          errorMessage="Entered name is invalid!"
        />
        <Input
          for="question"
          invalidPropHandler={invalidQuestionHandler}
          label="Въпрос"
          type="text"
          val={question}
          inputHandler={questionInputHandler}
          blurHandler={questionInputBlurHandler}
          errorMessage="Entered question is invalid!"
        />
        <div className="flex justify-end">
          <button
            className={`mt-3 bg-gray-730 enabled:hover:bg-gray-800 enabled:active:bg-gray-600 disabled:text-gray-490 px-7 py-2 rounded-xl`}
            type="submit"
            disabled={!formIsValid}
          >
            Изпрати
          </button>
        </div>
      </form>
      {notification && (
        <AnimatePresence>
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        </AnimatePresence>
      )}
    </div>
  );
};

export default AskQuestion;
