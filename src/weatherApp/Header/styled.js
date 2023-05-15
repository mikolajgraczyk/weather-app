import styled, { css } from "styled-components";
import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import { ReactComponent as MagnifyingGlassIcon } from "./magnifyingGlass.svg";

export const StyledHeader = styled.header`
  display: flex;
  gap: 4px;
  justify-content: space-between;
`;

export const BackToHomepageButton = styled.button`
  background: none;
  border: none;
  display: flex;
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
  width: 28px;
  height: 28px;
  color: white;
`;

export const MagnifyingGlass = styled(MagnifyingGlassIcon)`
  width: 28px;
  height: 28px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding: 0 8px;
  border-radius: 12px;
`;

export const Search = styled.div`
  display: flex;
  gap: 8px;
  width: 30%;
`;

export const SaveButton = styled.button`
  ${({ location }) =>
    location === "homePage" &&
    css`
      display: none;
    `}
`;
