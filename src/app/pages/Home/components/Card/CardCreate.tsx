import { Link } from "react-router-dom";

import { ContactsArray } from "../../../../../types/type";
import { FC } from "react";

import edit from "../../../../../assets/edit.svg";
import trash from "../../../../../assets/trash.svg";
import {
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

interface typeCard {
  contact: ContactsArray;
  handleClickDeleteModal: (contact: ContactsArray) => void;
}
const CardCreate: FC<typeCard> = ({ contact, handleClickDeleteModal }) => {
  return (
    <Card key={contact.id}>
      <Info>
        <ContactName>
          <SpanName>{contact.name}</SpanName>
          {contact.category_name && (
            <SpanCategory>{contact.category_name}</SpanCategory>
          )}
        </ContactName>
        <SpanInfo>{contact.email}</SpanInfo>
        <SpanInfo>{contact.phone}</SpanInfo>
      </Info>
      <Actions>
        <Link to={`/edit/${contact.id}`}>
          <img src={edit} alt="edit" />
        </Link>
        <BtnDelete type="button">
          <ImgIcon
            src={trash}
            alt="delete"
            onClick={() => handleClickDeleteModal(contact)}
          />
        </BtnDelete>
      </Actions>
    </Card>
  );
};

export default CardCreate;
