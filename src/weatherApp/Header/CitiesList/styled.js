import styled, { css } from "styled-components";

export const StyledCitiesList = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  border: 1px grey solid;
  border-radius: 0 0 12px 12px;
  max-width: 33%;
  margin-left: 3.5%;

  ${({ location }) =>
    location === "homePage" &&
    css`
      position: inherit;
      margin-left: 0;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    position: inherit;
    border-top: none;
    border-radius: 0 0 0 0;
    max-width: 91%;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: none;
    border-left: none;
    border-right: none;
    margin: 0;
  }
`;
