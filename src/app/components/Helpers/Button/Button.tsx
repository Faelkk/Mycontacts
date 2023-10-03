import React from "react";
import { StyledButton } from "./Style";
import { TypeButton } from "../../../../types/type";
import Spiner from "../Loading/Spiner";

const Button: React.FC<TypeButton> = ({
  type,
  disabled,
  isLoading,
  children,
  danger,
  onClick,
}) => {
  return (
    <>
      <StyledButton
        danger={danger}
        type={type}
        disabled={disabled || isLoading}
        onClick={onClick}
      >
        {isLoading ? <Spiner size={24} /> : children}
      </StyledButton>
    </>
  );
};

export default Button;
