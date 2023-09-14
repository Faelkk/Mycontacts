import styled from "styled-components";
import { TitleModalProps } from "../../../types/type";

export const OverlayWindow = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: var(--white);
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
`;
export const TitleModal = styled.h1<TitleModalProps>`
  font-size: 1.375rem;
  color: ${({ danger }) =>
    danger ? "var(--dangerDefault)" : "var(--boldDefault)"};
`;
export const ContentText = styled.p`
  margin-top: 0.5rem;
`;
export const FooterModal = styled.footer`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: flex-end;
  .cancelBtn {
    background: transparent;
    color: var(--gray200);
    margin-right: 0.5rem;
  }
`;
