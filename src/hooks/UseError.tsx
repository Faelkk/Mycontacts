import { useCallback, useState } from "react";
import { typeErrorHooks } from "../types/type";

const useError = () => {
  const [errors, setErrors] = useState<typeErrorHooks[]>([]);

  const setError = useCallback(
    ({ field, message }: typeErrorHooks) => {
      const errorAlreadyExists = errors.find((error) => error.field === field);
      if (errorAlreadyExists) return;
      setErrors((prevState) => [...prevState, { field, message }]);
    },
    [errors]
  );

  const removeError = useCallback((fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    );
  }, []);

  const getErrorMessageByFieldName = useCallback((fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  }, []);

  return { setError, removeError, getErrorMessageByFieldName, errors };
};

export default useError;
