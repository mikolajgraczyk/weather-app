import { styled } from "styled-components";

export const StyledCurrentWeatherInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
  margin-top: 4vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 3vh;
  }
`;

export const Name = styled.span`
  font-size: 64px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 48px;
  }
`;

export const Temp = styled.span`
  font-size: 56px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 38px;
  }
`;

export const TempFeelsLike = styled.span`
  font-weight: 300;
  font-size: 20px;
  margin-top: -12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const Condition = styled.span`
  font-size: 48px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
  font-size: 32px;
  }
`;
