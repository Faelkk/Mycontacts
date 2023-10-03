import styled, { RuleSet, css, keyframes } from "styled-components";

interface typeToastStyles {
  isLeaving: boolean;
  type: string;
  ref: HTMLDivElement;
}

const containerVariants: {
  default: RuleSet<object>;
  success: RuleSet<object>;
  danger: RuleSet<object>;
  [key: string]: RuleSet<object>;
} = {
  default: css`
    background: var(--mainDefault);
  `,
  success: css`
    background: var(--greenSucess);
  `,
  danger: css`
    background: var(--dangerDefault);
  `,
};

const mensageIn = keyframes`
from {
transform:translateY(100px)
}
to {
  transform:translateY(0px)
}
`;

const messageOut = keyframes`
from {
  transform:translateY(0px)
}
to {
transform:translateY(100px)
}
`;

export const Container = styled.div<typeToastStyles>`
  padding: 1rem 2rem;
  cursor: pointer;
  color: var(--white);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  animation: ${mensageIn} 0.3s;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${messageOut} 0.2s forwards;
    `}

  ${({ type }) =>
    (type && containerVariants[type]) || containerVariants.default};

  & + & {
    margin-top: 0.75rem;
  }

  span {
    margin-left: 0.5rem;
  }
  img {
    margin-left: 8px;
  }
`;
