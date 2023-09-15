import { useState } from "react";
import { typeErrorHooks } from "../types/type";

const UseError = () => {
  const [errors, setErrors] = useState<typeErrorHooks[]>([]);
  const setError = ({ field, message }: typeErrorHooks) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);
    if (errorAlreadyExists) return;
    setErrors((prevState) => [...prevState, { field, message }]);
  };

  const removeError = (fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    );
  };

  const getErrorMessageByFieldName = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };
  return { setError, removeError, getErrorMessageByFieldName, errors };
};

export default UseError;
