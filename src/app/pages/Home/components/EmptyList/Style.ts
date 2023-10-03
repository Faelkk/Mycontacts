import styled from "styled-components";

export const EmptyListContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextNoContact = styled.p`
  color: var(--gray200);
  margin-top: 0.5rem;
  text-align: center;
`;

export const SpanNewContact = styled.span`
  color: var(--mainDefault);
`;

export const ContainerNotContactFound = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;

export const NoContactFoundText = styled.span`
  margin-left: 1.5rem;
  color: var(--gray200);
  word-break: break-word;
`;
