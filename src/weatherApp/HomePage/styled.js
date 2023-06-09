import { styled } from "styled-components";

export const StyledHomepage = styled.div`
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    height: 93vh;
  }
`;

export const GridList = styled.div`
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
  margin-top: 20vh;
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 74vh;
  }
`;
