import { styled } from "styled-components";

export const StyledSpecificInfo = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    &:last-child {
      border-left: none;
      border-top: 1px white solid;
      flex-direction: column-reverse;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0;
    margin-top: 50px;

    &:last-child {
      border-top: none;
    }
  }
`;

export const Info = styled.span`
  width: 70%;
  min-width: 328px;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 0 20px 4px 20px;
  border-bottom: 1px white solid;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    min-width: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    min-width: 100px;
    width: 100%;
    gap: 0;
    padding: 0 8px 4px 8px;
  }
`;

export const InfoName = styled.span`
  width: 110px;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
  }
`;

export const Data = styled.span`
  white-space: nowrap;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
    text-align: center;
  }
`;
