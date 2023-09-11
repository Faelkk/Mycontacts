import { Container, LogoIcon } from "./style";
import logo from "../../../assets/logo-contacts.svg";

const Header = () => {
  return (
    <Container>
      <LogoIcon src={logo} alt="logo my-contacts" />
    </Container>
  );
};

export default Header;
