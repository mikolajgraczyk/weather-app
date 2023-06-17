import styled, { css } from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
  padding: 16px 12px 0 12px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  -ms-backdrop-filter: blur(4px);
  color: white;
  box-shadow: 0px 0px 31px 1px rgba(0, 0, 0, 1);

  & {
    scrollbar-width: 4px;
    scrollbar-color: #555 #888;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #888;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #444;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0 0 0 0;
    height: 100%;

    ${({ location }) =>
      location === "cityPage" &&
      css`
        background: none;
      `}
  }
`;
