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
  Container,
} from "./style";

import arrow from "../../../assets/arrow.svg";
import edit from "../../../assets/edit.svg";
import trash from "../../../assets/trash.svg";
import Input from "../../components/Helpers/InputSearch/Input";
import { Link } from "react-router-dom";

import Loader from "../../components/Helpers/Loading/Loader";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  return (
    <Container>
      <Input type="text" placeholder="Pesquisar contato..." />
      <Header>
        <TitleHeader>3 Contatos</TitleHeader>
        <Link to="/create">Novo contato</Link>
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
            <Link to="/edit/123">
              <img src={edit} alt="edit" />
            </Link>
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
