import styled, { css } from "styled-components";
import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import { ReactComponent as MagnifyingGlass } from "./magnifyingGlass.svg";
import { ReactComponent as Star } from "./star.svg";

export const StyledHeader = styled.header`
  display: flex;
  gap: 4px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 8px;
  }
`;

export const BackToHomepageButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ location }) =>
    location === "homePage" &&
    css`
      display: none;
    `}

  &:hover {
    cursor: pointer;
  }
`;

export const LeftArrowIcon = styled(LeftArrow)`
  width: 36px;
  height: 36px;
  color: white;
  transition: 0.2s;

  &:hover{
    transform: scale(1.1);
  }
`;

export const MagnifyingGlassIcon = styled(MagnifyingGlass)`
  width: 32px;
  height: 32px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
  display: none;
  }
`;

export const StarIcon = styled(Star)`
  width: 32px;
  height: 32px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  height: 32px;
  width: 100%;
  border: none;
  padding: 0 12px;
  border-radius: 12px;
  font-size: 16px;
`;

export const Search = styled.div`
  display: flex;
  width: 35%;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
  width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
  width: 100%;
  }
`;

export const SaveButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  ${({issaved}) => issaved === "true" && css`
    color: gold;
  `}
  
  ${({ location }) =>
    location === "homePage" &&
    css`
      display: none;
    `}

    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }

    &:active{
      transform: scale(1.2);
    }
`;
