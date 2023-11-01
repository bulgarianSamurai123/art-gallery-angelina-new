import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";

import InputContainer from './InputContainer';

const Input = (props) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (props.invalidPropHandler) {
      animate(
        "textarea, input",
        { x: [20, 0, -20, 0, 20, 0] },
        { type: "tween", duration: .25 }
      );
    }
  }, [props.invalidPropHandler]);

  return (
    <InputContainer scope={scope}>
      <label
        htmlFor={props.for}
        className={`${
          props.invalidPropHandler ? "text-red-600 font-bold" : "undefined"
        } text-base md:text-xl`}
      >
        {props.label}
      </label>
      {props.textarea && (
        <textarea
          className={`${
            props.invalidPropHandler
              ? "border-red-600 focus:border-red-600"
              : "border-gray-850 focus:border-gray-850"
          } border-2 rounded-lg p-2 text-sm outline-none focus:border-4 resize-none`}
          rows={10}
          placeholder="Enter your message."
          type={props.type}
          id={props.for}
          value={props.val}
          onChange={props.inputHandler}
          onBlur={props.blurHandler}
        />
      )}
      {!props.textarea && (
        <input
          className={`${
            props.invalidPropHandler
              ? "border-red-600 focus:border-red-600"
              : "border-gray-850 focus:border-gray-850"
          } border-2 rounded-lg  p-2 text-sm outline-none focus:border-4 `}
          type={props.type}
          id={props.for}
          value={props.val}
          onChange={props.inputHandler}
          onBlur={props.blurHandler}
        />
      )}
      {props.invalidPropHandler && (
        <p className="text-red-600 font-bold">{props.errorMessage}</p>
      )}
    </InputContainer>
  );
};

export default Input;
