import React from "react";
import { StyledButton } from "./Style";

import Spiner from "../Loading/Spiner";
import { ButtonProps } from "../../../../types/type";

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
        {isLoading ? <Spiner size={24} /> : children}
      </StyledButton>
    </>
  );
};

export default Button;
