import Button from "../../../../components/Helpers/Button/Button";

import sad from "../../../../../assets/sad.svg";

import { CointanerErro, DetailsErro, SpanDetail } from "./Style";
import useHome from "../../useHome";

const ErrorStatus = () => {
  const { error, handleTryAgain } = useHome();

  if (error)
    return (
      <>
        <CointanerErro>
          <img src={sad} alt="sad icon" />
          <DetailsErro>
            <SpanDetail>Ocorreu um erro ao obter os seus contatos!</SpanDetail>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </DetailsErro>
        </CointanerErro>
      </>
    );
};

export default ErrorStatus;
