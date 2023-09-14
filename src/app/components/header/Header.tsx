import styled from "styled-components";
import logo from "../../../assets/logo-contacts.svg";

const Container = styled.header`
  margin-top: 4.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
`;
const LogoIcon = styled.img`
  width: 201px;
`;

const Header = () => {
  return (
    <Container>
      <LogoIcon src={logo} alt="logo my-contacts" />
    </Container>
  );
};

export default Header;
