import React from "react";

const InputContainer = (props) => {
  return <div className={!props.className ? 'flex flex-col gap-2 pb-5' : props.className} ref={props.scope}>{props.children}</div>;
};

export default InputContainer;
