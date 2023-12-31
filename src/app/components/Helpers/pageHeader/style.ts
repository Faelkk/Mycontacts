import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 1.5rem;
  a {
    display: flex;
    align-items: center;
  }
`;

export const ImgBack = styled.img`
  transform: rotate(-90deg);
`;

export const SpanBack = styled.span`
  display: flex;
  font-weight: bold;
  color: var(--mainDefault);
  margin-left: 0.8rem;
`;

export const TitleHead = styled.h1`
  font-size: 1.5rem;
`;
