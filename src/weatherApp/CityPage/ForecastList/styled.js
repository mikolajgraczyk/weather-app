import { styled } from "styled-components";

export const StyledForecastList = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ForecastTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px white solid;
  flex-shrink: 0;
  flex-basis: 110px;
  padding: 12px 0;

  &:last-child {
    border: none;
  }
`;

export const ForecastHour = styled.span``;

export const ForecastTemp = styled.span`
  font-weight: 600;
  font-size: 28px;
`;

export const ForecastWeekday = styled.span`
  font-weight: 300;
  font-size: 14px;
`;
