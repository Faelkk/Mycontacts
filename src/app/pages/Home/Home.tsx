import {
  Header,
  TitleHeader,
  ListContainer,
  BtnSort,
  SpanList,
  ImgArrow,
  Card,
  Info,
  ContactName,
  SpanName,
  SpanCategory,
  SpanInfo,
  Actions,
  BtnDelete,
  ImgIcon,
} from "./style";
import { Container } from "../../style";

import arrow from "../../../assets/arrow.svg";
import edit from "../../../assets/edit.svg";
import trash from "../../../assets/trash.svg";
import Input from "../../components/Input/Input";

const Home = () => {
  return (
    <Container>
      <Input type="text" placeholder="Pesquisar contato..." />
      <Header>
        <TitleHeader>3 Contatos</TitleHeader>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header style={{ marginBottom: "0.8rem" }}>
          <BtnSort type="button">
            <SpanList> Nome</SpanList> <ImgArrow src={arrow} alt="arrow" />
          </BtnSort>
        </header>
        <Card>
          <Info>
            <ContactName>
              <SpanName>rafael achtenberg</SpanName>
              <SpanCategory>instagram</SpanCategory>
            </ContactName>
            <SpanInfo>rafael@devacademy.com.br</SpanInfo>
            <SpanInfo>(51) 99999-9999</SpanInfo>
          </Info>
          <Actions>
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <BtnDelete type="button">
              <ImgIcon src={trash} alt="delete" />
            </BtnDelete>
          </Actions>
        </Card>
      </ListContainer>
    </Container>
  );
};

export default Home;
