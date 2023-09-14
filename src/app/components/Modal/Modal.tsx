import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  ContentText,
  FooterModal,
  OverlayWindow,
  TitleModal,
} from "./style";
import { Button } from "../Helpers/Button/Button";
import { typeDanger } from "../../../types/type";

const Modal: React.FC<typeDanger> = ({ danger }) => {
  const modalRoot = document.getElementById("modal-root");

  return modalRoot
    ? ReactDOM.createPortal(
        <OverlayWindow>
          <Container>
            <TitleModal danger={danger}>
              Tem certeza que deseja remover o contato "Mateus Silva"?
            </TitleModal>
            <ContentText>Esta ação não poderá ser desfeita!</ContentText>
            <FooterModal>
              <button type="button" className="cancelBtn">
                Cancelar
              </button>
              <Button type="button" danger={danger}>
                Deletar contato
              </Button>
            </FooterModal>
          </Container>
        </OverlayWindow>,
        modalRoot
      )
    : null;
};

export default Modal;
