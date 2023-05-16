import styled from "styled-components";

export const StyledCitiesList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px grey solid;
  border-radius: 0 0 12px 12px;

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
  }
`;
