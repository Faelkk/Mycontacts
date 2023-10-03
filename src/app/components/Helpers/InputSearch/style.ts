import styled from "styled-components";

export const InputSearchContainer = styled.form`
  margin-bottom: 2rem;
  width: 100%;
`;

export const InputForm = styled.input`
  width: 100%;
  border: none;
  background: var(--white);
  height: 50px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0 16px;

  &:placeholder {
    color: var(--gray200);
  }
`;
