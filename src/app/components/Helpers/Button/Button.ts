import styled, { css } from "styled-components";
import { TitleModalProps } from "../../../../types/type";

export const Button = styled.button<TitleModalProps>`
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
    background: #ccc;
    cursor: default;
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
