import { typeInputHook } from "../../../../types/type";
import { InputForm, InputSearchContainer } from "./style";

const Input: React.FC<typeInputHook> = ({ type, placeholder }) => {
  return (
    <InputSearchContainer>
      <InputForm type={type} placeholder={placeholder} />
    </InputSearchContainer>
  );
};

export default Input;
