import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import useInput from "../../../hooks/use-input";
import { addMessage } from "../../../helpers/add-util";
import { notificationHandler } from "../../../helpers/notification-util";
import Input from "/components/ui/form/Input";
import Notification from "../../ui/Notification";
import { sendContactForm } from "../../../helpers/api-util";

const ContactForm = () => {
  let regTel =
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;

  const {
    value: name,
    invalidInput: invalidNameHandler,
    valueIsValid: enteredNameIsValid,
    valueChangeHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    invalidInput: invalidEmailHandler,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));
  const {
    value: tel,
    invalidInput: invalidTelHandler,
    valueIsValid: enteredTelIsValid,
    valueChangeHandler: telInputHandler,
    inputBlurHandler: telInputBlurHandler,
    reset: resetTelHandler,
  } = useInput((value) => value.trim() !== "" && regTel.test(value));
  const {
    value: message,
    invalidInput: invalidMessageHandler,
    valueIsValid: enteredMessageIsValid,
    valueChangeHandler: messageInputHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageHandler,
  } = useInput((value) => value.trim() !== "");

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

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredTelIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  async function submitHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredTelIsValid &&
      !enteredMessageIsValid
    ) {
      return;
    }

    try {
      const newMessage = {
        date,
        name,
        email,
        tel,
        message,
      };

      sendContactForm(newMessage)

      // addMessage(newMessage, "messages");
      setRequestStatus("success");

      resetNameHandler();
      resetEmailHandler();
      resetTelHandler();
      resetMessageHandler();
    } catch (error) {
      setRequestError(error);
      setRequestStatus("error");
    }
  }

  let notification;
  notification = notificationHandler(requestStatus, notification, requestError);

  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          for="name"
          invalidPropHandler={invalidNameHandler}
          label="Име"
          type="text"
          val={name}
          inputHandler={nameInputHandler}
          blurHandler={nameInputBlurHandler}
          errorMessage="Името не е валидно!"
        />
        <Input
          for="email"
          invalidPropHandler={invalidEmailHandler}
          label="Имейл"
          type="email"
          val={email}
          inputHandler={emailInputHandler}
          blurHandler={emailInputBlurHandler}
          errorMessage="Имейла не е валиден!"
        />
        <Input
          for="tel"
          invalidPropHandler={invalidTelHandler}
          label="Телефон"
          type="tel"
          val={tel}
          inputHandler={telInputHandler}
          blurHandler={telInputBlurHandler}
          errorMessage="Телефонът не е валиден!"
        />
        <Input
          for="message"
          invalidPropHandler={invalidMessageHandler}
          label="Съобщение"
          type="text"
          val={message}
          inputHandler={messageInputHandler}
          blurHandler={messageInputBlurHandler}
          errorMessage="Съобщението не е валидно!"
          textarea
        />
        <div className="flex flex-row justify-end">
          <button
            className={`mt-3 bg-gray-730 enabled:hover:bg-gray-800 enabled:active:bg-gray-600 disabled:text-gray-490 px-7 py-2 rounded-xl`}
            type="submit"
            disabled={!formIsValid}
          >
            Изпрати
          </button>
        </div>
      </form>
      <AnimatePresence>
        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
