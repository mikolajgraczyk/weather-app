import { styled } from "styled-components";

export const StyledHomepage = styled.div`
  height: 100vh;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
`;
