import { styled } from "styled-components";

export const MoreData = styled.div`
  max-width: 90%;
  margin: 4vh auto 0;
  border: 1px grey solid;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    max-width: none;
    width: 100%;
    margin-top: 6vh;
    border-left: none;
    border-right: none;
  }
`;
