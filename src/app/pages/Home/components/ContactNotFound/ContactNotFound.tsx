import {
  ContainerNotContactFound,
  NoContactFoundText,
} from "../EmptyList/Style";

import magniferQuestion from "../../../../../assets/magnifier-question.svg";

interface ContactNotFoundProps {
  searchTerms: string;
}

const ContactNotFound = ({ searchTerms }: ContactNotFoundProps) => {
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
