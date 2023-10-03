import styled from "styled-components";

export const Card = styled.div`
  background: var(--white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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
