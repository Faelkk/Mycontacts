import arrow from "../../../../assets/arrow.svg";
import { ListHeader } from "../components/Header/Style";
import { BtnSort, SpanList, ImgArrow } from "./style";
import useHome from "../useHome";

const ListHeadersHome = () => {
  const { orderBy, handleToggleOrderBy } = useHome();
  return (
    <ListHeader>
      <BtnSort type="button" onClick={handleToggleOrderBy}>
        <SpanList> Nome</SpanList>{" "}
        <ImgArrow orderby={orderBy} src={arrow} alt="arrow" />
      </BtnSort>
    </ListHeader>
  );
};

export default ListHeadersHome;
