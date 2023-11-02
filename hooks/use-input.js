import { useState } from "react";

function useInput(validation, placeholder) {
  const [enteredValue, setEnteredValue] = useState(placeholder);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validation(enteredValue);
  const invalidInput = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const newValue = event.target.value;

    if (placeholder === '+359') {
      if (newValue.startsWith('+359')) {
        setEnteredValue(newValue);
      } else if (newValue === '+') {
        setEnteredValue('+359');
      }
    }
  
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    invalidInput,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
}

export default useInput;
