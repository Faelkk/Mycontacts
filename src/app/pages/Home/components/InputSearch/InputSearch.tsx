import { ChangeEvent } from "react";
import { Input } from "../../../../components/Helpers/InputsPage/InputPage";

export interface InputSearchProps {
  searchTerms: string;
  handleChangeSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch = ({
  searchTerms,
  handleChangeSearchTerm,
}: InputSearchProps) => {
  return (
    <Input
      type="text"
      placeholder="Pesquisar contato..."
      value={searchTerms}
      onChange={handleChangeSearchTerm}
    />
  );
};

export default InputSearch;
