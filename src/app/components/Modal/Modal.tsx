import React from "react";
import { Container, FooterModal, OverlayWindow, TitleModal } from "./style";
import Button from "../Helpers/Button/Style";
import { typeDanger } from "../../../types/type";
import ReactPortal from "../ReactPortal/ReactPortal";
import useAnimation from "../../../hooks/useAnimation";

const Modal: React.FC<typeDanger> = ({
  isLoading,
  danger,
  title,
  children,
  onCancel,
  onConfirm,
  isModalVisible,
}) => {
  const { shouldRender, animatedElementRef } = useAnimation(isModalVisible);

  if (!shouldRender) return null;

  return (
    <>
      <ReactPortal containerId="modal-root">
        <OverlayWindow isLeaving={!isModalVisible} ref={animatedElementRef}>
          <Container isLeaving={!isModalVisible}>
            <TitleModal danger={danger}>
              {`Tem certeza que deseja remover o contato "${title}"`}?
            </TitleModal>
            {children}
            <FooterModal>
              <button
                type="button"
                className="cancelBtn"
                onClick={onCancel}
                disabled={isLoading}
              >
                cancelar
              </button>
              <Button
                type="button"
                danger={danger}
                onClick={onConfirm}
                isLoading={isLoading}
              >
                Deletar
              </Button>
            </FooterModal>
          </Container>
        </OverlayWindow>
      </ReactPortal>{" "}
    </>
  );
};

export default Modal;
