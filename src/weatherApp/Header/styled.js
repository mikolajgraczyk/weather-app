import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 4px;
  justify-content: space-between;
`;

export const BackToHomepageButton = styled.button`
  ${({ location }) =>
    location === "homePage" &&
    css`
      display: none;
    `}
`;

export const Search = styled.div`
  display: flex;
  gap: 4px;
`;

export const SaveButton = styled.button`
  ${({ location }) =>
    location === "homePage" &&
    css`
      display: none;
    `}
`;
