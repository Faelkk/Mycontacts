import { ChangeEvent } from "react";
import { Input } from "../../../../components/Helpers/InputsPage/InputPage";
import useHome from "../../useHome";

export interface InputSearchType {
  searchTerms: string;
  handleChangeSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch = () => {
  const { searchTerms, handleChangeSearchTerm } = useHome();

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
