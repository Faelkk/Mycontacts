import styled from "styled-components";

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }
  small {
    color: var(--dangerLight);
    font-size: 0.75rem;
    display: block;
    margin-top: 0.5rem;
  }
`;
