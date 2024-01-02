import React from "react";
import { StyledSpinner } from "./style";
import { SpinnerProps } from "../../../../types/type";

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return <StyledSpinner size={size} />;
};

export default Spinner;
