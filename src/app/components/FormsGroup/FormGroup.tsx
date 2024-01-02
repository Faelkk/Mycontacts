import { FormGroupProps } from "../../../types/type";
import Spinner from "../Helpers/Loading/Spinner";


import { Container } from "./style";

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  error,
  isloading,
}) => {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isloading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormGroup;
