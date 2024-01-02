import { ChangeEvent, FormEvent, useImperativeHandle, useState } from "react";
import ValidateEmail from "../../Utils/ValidateEmail";
import formatPhone from "../../Utils/formatPhone";

import useApi from "../../../hooks/useApi";
import { ContactsArrayWithCategoryId } from "../../../types/type";
import useError from "../../../hooks/UseError";

const useContactForm = (onSubmit: any, ref: any) => {
  const { categoryFetch, loading } = useApi();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useError();

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "name is invalid" });
    } else {
      removeError("name");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value && !ValidateEmail(event.target.value)) {
      setError({ field: "email", message: "email is invalid" });
    } else {
      removeError("email");
    }
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(event.target.value));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    onSubmit && (await onSubmit({ name, email, phone, category }));
   
    
    setIsSubmitting(false);
  };

useImperativeHandle(ref, () => ({
  setFieldsValue: (contact: ContactsArrayWithCategoryId) => {

    
    setName(contact.name ?? "");
    setEmail(contact.email ?? "");
    setPhone(formatPhone(contact.phone ?? ""));
    if (contact.categoryId !== undefined && contact.categoryId !== null) {
      setCategory(contact.categoryId);
    }
  },
  resetFields: () => {
    setName("");
    setEmail("");
    setPhone("");
    setCategory("");
  },
}));

  const isFormValid = name && errors.length === 0;

  return {
    name,
    phone,
    email,
    category,
    categoryFetch,
    loading,
    isSubmitting,
    isFormValid,
    setCategory,
    getErrorMessageByFieldName,
    handleChangeName,
    handleEmailChange,
    handlePhoneChange,
    handleSubmit,
  };
};

export default useContactForm;
