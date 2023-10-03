import { TypeFormGroup } from "../../../types/type";

import Spiner from "../Helpers/Loading/Spiner";
import { Container } from "./style";

const FormGroup: React.FC<TypeFormGroup> = ({ children, error, isloading }) => {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isloading && (
          <div className="loader">
            <Spiner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormGroup;
