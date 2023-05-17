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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0 8px;
  }
`;

export const NoSavedCitiesInfo = styled.div`
  font-weight: 600;
  font-size: 56px;
  color: rgba(193, 193, 193, 0.4);
  text-align: center;
  margin: 20vh auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 100vh;
  }
`;
