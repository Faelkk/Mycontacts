import styled, { css } from "styled-components";
import { TitleModalProps } from "../../../../types/type";
import Button from "./Button";

export const StyledButton = styled.button<TitleModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  border: none;
  padding: 0 16px;
  background: var(--mainDefault);
  font-size: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: var(--white);
  border-radius: 4px;
  transition: background 0.2s ease-in;
  &:hover {
    background: var(--mainLight);
  }
  &:active {
    background: var(--mainDark);
  }
  &[disabled] {
    background: #ccc !important;
    cursor: default !important;
  }
  ${({ danger }) =>
    danger &&
    css`
      background: var(--dangerDefault);

      &:hover {
        background: var(--dangerLight);
      }
      &:active {
        background: var(--dangerDark);
      }
    `}
`;
export default Button;
