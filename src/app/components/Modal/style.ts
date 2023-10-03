import styled, { css, keyframes } from "styled-components";
import { TitleModalProps, typeIsModalVisible } from "../../../types/type";

const fadeIn = keyframes`
from {
  opacity:0
}
to {
  opacity:1
}
`;

const fadeOut = keyframes`
from {
  opacity:1
}
to {
  opacity:0
}
`;

const scaleIN = keyframes`
from {
transform:scale(0)
}
to {
  transform:scale(1)
}
`;

const scaleOut = keyframes`
from {
transform:scale(0)
}
to {
  transform:scale(0) }
`;

export const OverlayWindow = styled.div<typeIsModalVisible>`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}
`;
export const Container = styled.div<typeIsModalVisible>`
  width: 100%;
  max-width: 450px;
  background: var(--white);
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  animation: ${scaleIN} 0.3s;
  .modal-body {
    margin-top: 1rem;
  }

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${scaleOut} 0.3s forwards;
    `}
`;
export const TitleModal = styled.h1<TitleModalProps>`
  font-size: 1.375rem;
  color: ${({ danger }) =>
    danger ? "var(--dangerDefault)" : "var(--boldDefault)"};
`;
export const ContentText = styled.p``;

export const FooterModal = styled.footer`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: flex-end;
  .cancelBtn {
    background: transparent;
    color: var(--gray200);
    margin-right: 1.5rem;

    &[disabled] {
      cursor: default;
    }
  }
`;
