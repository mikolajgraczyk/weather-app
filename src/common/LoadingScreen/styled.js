import { styled } from "styled-components";
import { ReactComponent as Loading } from "./loading.svg";

export const StyledLoadingScreen = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 80%;
    height: 100vh;
  }
`;

export const StyledLoadingIcon = styled(Loading)`

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    transform: scale(0.8);
  }
`;
