import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.className} mt-3 bg-gray-730 hover:bg-gray-800 active:bg-gray-600 px-5 md:px-7 py-2 rounded-xl text-base`}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
