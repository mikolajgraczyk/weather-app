import { styled } from "styled-components";

export const StyledSpecificInfo = styled.div`
  display: flex;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-items: center;
  padding: 50px 0 100px 0;
  gap: 50px;

  &:last-child {
    border-left: 1px white solid;
  }
`;

export const Info = styled.span`
  width: 70%;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 0 20px 4px 20px;
  border-bottom: 1px white solid;
`;

export const InfoName = styled.span`
  width: 110px;
  font-size: 24px;
  font-weight: 600;
`;

export const Data = styled.span`
  white-space: nowrap;
  font-size: 24px;
`;
