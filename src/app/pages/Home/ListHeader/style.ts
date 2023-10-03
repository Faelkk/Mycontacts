import styled from "styled-components";

interface orderIsAscOrDesc {
  orderby: string;
}

export const BtnSort = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
`;

export const SpanList = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
  color: var(--mainDefault);
`;

export const ImgArrow = styled.img<orderIsAscOrDesc>`
  transform: ${({ orderby }) =>
    orderby === "asc" ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.3s ease-in-out;
`;
