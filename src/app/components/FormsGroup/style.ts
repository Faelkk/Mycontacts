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
  .form-item {
    position: relative;

    .loader {
      position: absolute;
      top: 1.1rem;
      right: 1rem;
    }
  }
`;
