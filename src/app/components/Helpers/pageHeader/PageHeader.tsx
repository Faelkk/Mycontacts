import { Container, SpanBack, TitleHead } from "./style";
import { Link } from "react-router-dom";

import arrow from "../../../../assets/arrow.svg";
import { ImgBack } from "./style";
import { TypeHead } from "../../../../types/type";

const PageHeader: React.FC<TypeHead> = ({ title }) => {
  return (
    <Container>
      <Link to="/">
        <ImgBack src={arrow} alt="arrow" />
        <SpanBack>Voltar</SpanBack>
      </Link>
      <TitleHead>{title}</TitleHead>
    </Container>
  );
};

export default PageHeader;
