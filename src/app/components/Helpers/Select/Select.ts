import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  background: var(--white);
  border: 2px solid var(--white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  padding: 0 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
  &:focus {
    border-color: var(--mainDefault);
  }
`;
