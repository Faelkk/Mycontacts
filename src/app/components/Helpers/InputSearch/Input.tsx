import { InputProps } from "../../../../types/type";
import { InputForm, InputSearchContainer } from "./style";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputSearchContainer>
      <InputForm
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputSearchContainer>
  );
};

export default Input;
