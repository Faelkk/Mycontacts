import React from "react";
import { StyledButton } from "./Style";

import { ButtonProps } from "../../../../types/type";
import Spinner from "../Loading/Spinner";



const Button: React.FC<ButtonProps> = ({
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
        {isLoading ? <Spinner size={24} /> : children}
      </StyledButton>
    </>
  );
};

export default Button;
