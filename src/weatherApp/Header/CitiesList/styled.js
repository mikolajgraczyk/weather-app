import styled from "styled-components";

export const StyledCitiesList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px white solid;
  border-radius: 0 0 12px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    position: inherit;
  }
`;
