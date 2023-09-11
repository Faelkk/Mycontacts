import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: var(--mainDefault);
    font-weight: bold;
    border: 2px solid var(--mainDefault);
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2 ease-in;
    &:hover {
      background: var(--mainDefault);
      color: var(--white);
    }
  }
`;
export const TitleHeader = styled.span`
  color: var(--boldDefault);
  font-size: 1.5rem;
`;
export const ListContainer = styled.div`
  margin-top: 1.5rem;
`;
export const BtnSort = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
`;
export const SpanList = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
  color: var(--mainDefault);
`;
export const ImgArrow = styled.img``;
export const Card = styled.div`
  background: var(--white);
  box-shadow: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Info = styled.div``;
export const ContactName = styled.div`
  display: flex;
  align-items: center;
`;
export const SpanCategory = styled.span`
  background: var(--mainLighter);
  color: var(--mainLight);
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px;
  border-radius: 0.25rem;
  margin-left: 0.25rem;
`;
export const SpanName = styled.span`
  color: var(--boldDefault);
  margin-right: 1rem;
  text-transform: capitalize;
  font-weight: bold;
`;
export const SpanInfo = styled.span`
  display: block;
  font-size: 0.875rem;
  color: var(--gray200);
`;
export const BtnDelete = styled.button`
  background: transparent;
  border: none;
  margin-left: 0.5rem;
`;
export const ImgIcon = styled.img``;
export const Actions = styled.div`
  display: flex;
  align-items: center;
`;
