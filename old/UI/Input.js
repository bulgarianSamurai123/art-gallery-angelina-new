import React from "react";

const Input = (props) => {
  return (
    <input
      className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
      type={props.type}
      id={props.id}
      onChange={props.onChange}
      onBlur={props.onBlur}
      defaultValue={props.value}
    />
  );
};

export default Input;
