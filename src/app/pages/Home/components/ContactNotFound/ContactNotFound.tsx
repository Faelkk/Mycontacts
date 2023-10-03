import {
  ContainerNotContactFound,
  NoContactFoundText,
} from "../EmptyList/Style";

import magniferQuestion from "../../../../../assets/magnifier-question.svg";
import useHome from "../../useHome";

const ContactNotFound = () => {
  const { searchTerms } = useHome();
  return (
    <ContainerNotContactFound>
      <img src={magniferQuestion} alt="Magnifer question" />
      <NoContactFoundText>
        Nenhum resultado foi encontrado para <strong>{searchTerms}</strong>.
      </NoContactFoundText>
    </ContainerNotContactFound>
  );
};

export default ContactNotFound;
