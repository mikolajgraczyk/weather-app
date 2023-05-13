import { styled } from "styled-components";

export const StyledForecastList = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const ForecastTile = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px black solid;
  flex-shrink: 0;
  flex-basis: 80px;
  padding: 4px;

  &:last-child {
        border: none;
    }
`;

export const ForecastHour = styled.span``;

export const ForecastTemp = styled.span``;

export const ForecastWeekday = styled.span``;
