import React from "react";

const InputContainer = (props) => {
  return <div className="flex flex-col gap-2 pb-5" ref={props.scope}>{props.children}</div>;
};

export default InputContainer;
