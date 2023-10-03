import emptyBox from "../../../../../assets/empty-box.svg";
import { EmptyListContainer, TextNoContact, SpanNewContact } from "./Style";

const EmptyList = () => {
  return (
    <EmptyListContainer>
      <img src={emptyBox} alt="Empty box" />
      <TextNoContact>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <SpanNewContact> ”Novo contato” </SpanNewContact> à cima para cadastrar
        o seu primeiro!
      </TextNoContact>
    </EmptyListContainer>
  );
};

export default EmptyList;
