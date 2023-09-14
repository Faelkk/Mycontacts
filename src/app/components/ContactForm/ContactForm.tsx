import { typeContactForm } from "../../../types/type";
import FormGroup from "../FormsGroup/FormGroup";
import { Button } from "../Helpers/Button/Button";
import { Input } from "../Helpers/InputsPage/InputPage";
import { Select } from "../Helpers/Select/Select";
import { ButtonContainer, Form } from "./style";

const ContactForm: React.FC<typeContactForm> = ({ buttonText }) => {
  return (
    <Form>
      <FormGroup error="Erro ao cadastrar">
        <Input placeholder="nome" error />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
          <option value="instagram">Linkedin</option>
          <option value="instagram">Twitter</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit">{buttonText}</Button>{" "}
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
