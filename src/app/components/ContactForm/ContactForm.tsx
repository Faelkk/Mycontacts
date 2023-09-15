import { ChangeEvent, FormEvent, useState } from "react";
import { typeContactForm } from "../../../types/type";
import FormGroup from "../FormsGroup/FormGroup";
import { Button } from "../Helpers/Button/Button";
import { Input } from "../Helpers/InputsPage/InputPage";
import { Select } from "../Helpers/Select/Select";
import { ButtonContainer, Form } from "./style";
import ValidateEmail from "../Helpers/Regexp/ValidateEmail";
import UseError from "../../../hooks/UseError";
import formatPhone from "../Helpers/Regexp/formatPhone";

const ContactForm: React.FC<typeContactForm> = ({ buttonText }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    UseError();
  const isFormValid = name && errors.length === 0;

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
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          type="text"
          placeholder="Nome *"
          value={name}
          onChange={handleChangeName}
          error={getErrorMessageByFieldName("name")}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName("email")}
        />
      </FormGroup>
      <FormGroup>
        <Input
          maxLength="15"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option value="">Categorias</option>
          <option value="Instagram">Instagram</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Twitter">Twitter</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonText}
        </Button>{" "}
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
