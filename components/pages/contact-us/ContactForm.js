import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

import useInput from "../../../hooks/use-input";
import Input from "/components/ui/form/Input";
import Notification from "../../ui/Notification";
import { sendForm } from "../../../helpers/api-util";
import DataContext from "../../../context/DataCotext";

const ContactForm = () => {
  const { sharedData } = useContext(DataContext);
  const t = useTranslations("Contact");

  let regTel =
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;

  const {
    value: name,
    invalidInput: invalidNameHandler,
    valueIsValid: enteredNameIsValid,
    valueChangeHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameHandler,
  } = useInput((value) => value.trim() !== "", "");
  const {
    value: email,
    invalidInput: invalidEmailHandler,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"), "");
  const {
    value: tel,
    invalidInput: invalidTelHandler,
    valueIsValid: enteredTelIsValid,
    valueChangeHandler: telInputHandler,
    inputBlurHandler: telInputBlurHandler,
    reset: resetTelHandler,
  } = useInput((value) => value.trim() !== "" && regTel.test(value), "+359");
  const {
    value: message,
    invalidInput: invalidMessageHandler,
    valueIsValid: enteredMessageIsValid,
    valueChangeHandler: messageInputHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageHandler,
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
        sharedData,
        date,
        name,
        email,
        tel,
        message,
      };

      try {
        await sendForm(newMessage);
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }

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
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: t("pendingTitle"),
      message: t("pendingMessage"),
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: t("successTitle"),
      message: t("successMessage"),
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: t("errorTitle"),
      message: t("errorMessage"),
    };
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          for="name"
          invalidPropHandler={invalidNameHandler}
          label={t("name")}
          type="text"
          val={name}
          inputHandler={nameInputHandler}
          blurHandler={nameInputBlurHandler}
          errorMessage={t("nameError")}
        />
        <Input
          for="email"
          invalidPropHandler={invalidEmailHandler}
          label={t("email")}
          type="email"
          val={email}
          inputHandler={emailInputHandler}
          blurHandler={emailInputBlurHandler}
          errorMessage={t("emailError")}
        />
        <Input
          for="tel"
          invalidPropHandler={invalidTelHandler}
          label={t("phone")}
          type="tel"
          val={tel}
          inputHandler={telInputHandler}
          blurHandler={telInputBlurHandler}
          errorMessage={t("phoneError")}
        />
        <Input
          for="message"
          invalidPropHandler={invalidMessageHandler}
          label={t("message")}
          type="text"
          val={message}
          inputHandler={messageInputHandler}
          blurHandler={messageInputBlurHandler}
          errorMessage={t("messageError")}
          placeholder={t("messagePlaceholder")}
          textarea
        />
        <div className="flex flex-row justify-between items-center text-center">
          <p>{t("consent")}</p>
          <button
            className={`mt-3 bg-gray-730 enabled:hover:bg-gray-800 enabled:active:bg-gray-600 disabled:text-gray-490 px-7 py-2 rounded-xl`}
            type="submit"
            disabled={!formIsValid}
          >
            {t("send")}
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
