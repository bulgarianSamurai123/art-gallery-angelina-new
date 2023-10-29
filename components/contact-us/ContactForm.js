import React from "react";

import Input from "/components/ui/Input";
import useInput from "../../hooks/use-input";
import { addMessage } from "../../helpers/add-util";

const ContactForm = () => {
  let regName = /^\b(?:[A-Z]\w+\b(?:\s*)?)+$/;
  let regTel =
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;

  const {
    value: name,
    invalidInput: invalidNameHandler,
    valueIsValid: enteredNameIsValid,
    valueChangeHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameHandler,
  } = useInput((value) => value.trim() !== "" && regName.test(value));
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

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredTelIsValid &&
      !enteredMessageIsValid
    ) {
      return;
    }

    const newMessage = {
      date,
      name,
      email,
      tel,
      message,
    };

    addMessage(newMessage);

    resetNameHandler();
    resetEmailHandler();
    resetTelHandler();
    resetMessageHandler();
  }

  return (
    <form onSubmit={submitHandler}>
      <Input
        for="name"
        invalidPropHandler={invalidNameHandler}
        label="Name"
        type="text"
        val={name}
        inputHandler={nameInputHandler}
        blurHandler={nameInputBlurHandler}
        errorMessage="Entered name is invalid!"
      />
      <Input
        for="email"
        invalidPropHandler={invalidEmailHandler}
        label="Email"
        type="email"
        val={email}
        inputHandler={emailInputHandler}
        blurHandler={emailInputBlurHandler}
        errorMessage="Entered email is invalid!"
      />
      <Input
        for="tel"
        invalidPropHandler={invalidTelHandler}
        label="Phone"
        type="tel"
        val={tel}
        inputHandler={telInputHandler}
        blurHandler={telInputBlurHandler}
        errorMessage="Entered tel is invalid!"
      />
      <Input
        for="message"
        invalidPropHandler={invalidMessageHandler}
        label="Message"
        type="text"
        val={message}
        inputHandler={messageInputHandler}
        blurHandler={messageInputBlurHandler}
        errorMessage="Entered message is invalid!"
        textarea
      />
      <div className="flex flex-row justify-end">
        <button
          className={`mt-3 bg-gray-730 enabled:hover:bg-gray-800 enabled:active:bg-gray-600 disabled:text-gray-490 px-7 py-2 rounded-xl`}
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
