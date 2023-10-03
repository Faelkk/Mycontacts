import { Link } from "react-router-dom";

import { Header, TitleHeader } from "./Style";
import useHome from "../../useHome";

const HeaderHome = () => {
  const { contacts, error, filteredContacts } = useHome();

  const alignment = error
    ? "flex-end"
    : contacts.length > 0
    ? "space-between"
    : "center";

  return (
    <Header justifyContent={alignment}>
      {!error && contacts.length > 0 && (
        <TitleHeader>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? " contato" : " contatos"}
        </TitleHeader>
      )}
      <Link to="/create">Novo contato</Link>
    </Header>
  );
};

export default HeaderHome;
