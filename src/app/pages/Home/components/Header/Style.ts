import styled from "styled-components";

interface isErrorTrue {
  justifyContent: string;
}

export const Header = styled.header<isErrorTrue>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border-bottom: 2px solid var(--gray100);
  padding-bottom: 1rem;
  margin-top: 1rem;

  a {
    color: var(--mainDefault);
    font-weight: bold;
    border: 2px solid var(--mainDefault);
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2 ease-in;

    &:hover {
      background: var(--mainDefault);
      color: var(--white);
    }
  }
`;

export const TitleHeader = styled.span`
  color: var(--boldDefault);
  font-size: 1.5rem;
`;

export const ListHeader = styled.header`
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
`;
