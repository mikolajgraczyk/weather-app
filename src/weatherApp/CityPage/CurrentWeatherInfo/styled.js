import { styled } from "styled-components";

export const StyledCurrentWeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.3;
`;

export const CityName = styled.span`
    font-size: 64px;
`;

export const Temp = styled.span`
    font-size: 56px;
    font-weight: 600;
`;

export const TempFeelsLike = styled.span`
    font-weight: 300;
    font-size: 20px;
    margin-top: -12px;
`;

export const Condition = styled.span`
    font-size: 48px;
    font-weight: 400;
`;