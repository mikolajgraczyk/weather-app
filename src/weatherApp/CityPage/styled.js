import { styled } from "styled-components";

export const MoreData = styled.div`
  max-width: 80%;
  margin: 4vh auto 0;
  border: 1px white solid;
  border-radius: 12px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    max-width: none;
    width: 100%;
    margin-top: 2vh;
  }
`;
