import { Link } from "react-router-dom";

import { Header, TitleHeader } from "./Style";

import { ContactsArray } from "../../../../../types/type";

interface HeaderHomeProps {
  contacts: ContactsArray[] | undefined;
  error: boolean;
  filteredContacts: ContactsArray[] | undefined;
}

const HeaderHome = ({ contacts, error, filteredContacts }: HeaderHomeProps) => {
  const alignment = error
    ? "flex-end"
    : contacts && contacts.length > 0
    ? "space-between"
    : "center";

  return (
    <Header justifyContent={alignment}>
      {!error && contacts && contacts.length > 0 && (
        <TitleHeader>
          {filteredContacts?.length}
          {filteredContacts?.length === 1 ? " contato" : " contatos"}
        </TitleHeader>
      )}
      <Link to="/create">Novo contato</Link>
    </Header>
  );
};

export default HeaderHome;
