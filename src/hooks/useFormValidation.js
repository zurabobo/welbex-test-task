import { useState, useCallback } from "react";

export function useFormValidation() {

  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);


  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [name]: value
    });

    setIsValid(evt.target.closest('form').checkValidity());

  }

  const resetForm = useCallback(
    (newValues = {}, newIsValid = false) => {
      setValues(newValues);
      setIsValid(newIsValid);
    },
    [setValues, setIsValid]
  )

  return {
    values,
    isValid,
    handleChange,
    resetForm,
  };

};
