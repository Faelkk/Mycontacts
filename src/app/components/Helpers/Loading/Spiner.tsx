import React from "react";
import { StyledSpiner } from "./style";
import { typesSpiner } from "../../../../types/type";

const Spiner: React.FC<typesSpiner> = ({ size }) => {
  return <StyledSpiner size={size} />;
};

export default Spiner;
