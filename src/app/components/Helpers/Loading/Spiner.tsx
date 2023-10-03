import React from "react";
import { StyledSpiner } from "./style";
import { SpinnerProps } from "../../../../types/type";

const Spiner: React.FC<SpinnerProps> = ({ size }) => {
  return <StyledSpiner size={size} />;
};

export default Spiner;
