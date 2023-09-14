import { TypeFormGroup } from "../../../types/type";

import { Container } from "./style";

const FormGroup: React.FC<TypeFormGroup> = ({ children, error }) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormGroup;
