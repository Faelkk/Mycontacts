import { Input } from "../Helpers/InputsPage/InputPage";
import { Select } from "../Helpers/Select/Select";
import { ButtonContainer, Form } from "./style";

import FormGroup from "../FormsGroup/FormGroup";
import Button from "../Helpers/Button/Style";

import useContactForm from "./useContactForm";
import { forwardRef } from "react";
import { ContactFormProps } from "../../../types/type";

const ContactForm = forwardRef(
  ({ buttonText, onSubmit }: ContactFormProps, ref) => {
    const {
      name,
      phone,
      email,
      category,
      categorysFetch,
      loading,
      isSubmitting,
      isFormValid,
      setCategory,
      getErrorMessageByFieldName,
      handleChangeName,
      handleEmailChange,
      handlePhoneChange,
      handleSubmit,
    } = useContactForm(onSubmit, ref);

    return (
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup error={getErrorMessageByFieldName("name")}>
          <Input
            disabled={isSubmitting}
            type="text"
            placeholder="Nome *"
            value={name}
            onChange={handleChangeName}
            error={getErrorMessageByFieldName("name")}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName("email")}>
          <Input
            disabled={isSubmitting}
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            error={getErrorMessageByFieldName("email")}
          />
        </FormGroup>

        <FormGroup>
          <Input
            disabled={isSubmitting}
            maxLength="15"
            placeholder="Telefone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </FormGroup>

        <FormGroup isloading={loading}>
          <Select
            value={category}
            onChange={({ target }) => setCategory(target.value)}
            disabled={loading || isSubmitting}
          >
            <option value="">Sem categoria</option>
            {categorysFetch.map((categoria) => {
              return (
                <option value={categoria.id} key={categoria.id}>
                  {categoria.name}
                </option>
              );
            })}
          </Select>
        </FormGroup>

        <ButtonContainer>
          <Button
            type="submit"
            disabled={!isFormValid}
            isLoading={isSubmitting}
          >
            {buttonText}
          </Button>{" "}
        </ButtonContainer>
      </Form>
    );
  }
);

export default ContactForm;
