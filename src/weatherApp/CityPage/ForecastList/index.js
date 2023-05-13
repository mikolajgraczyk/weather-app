import { nanoid } from "@reduxjs/toolkit";
import { convertDate } from "../useConvertDate";
import {
  StyledForecastList,
  ForecastTile,
  ForecastHour,
  ForecastTemp,
  ForecastWeekday,
} from "./styled";

const ForecastList = ({ forecastData }) => {
  
  return (
    <StyledForecastList>
      {forecastData.list.map((element) => {
        const { hour, dayOfTheWeek } = convertDate(element.dt);
        return (
          <ForecastTile key={nanoid()}>
            <ForecastHour>{hour}</ForecastHour>
            <ForecastTemp>{element.main.temp.toFixed(0)} °C</ForecastTemp>
            <ForecastWeekday>{dayOfTheWeek}</ForecastWeekday>
          </ForecastTile>
        );
      })}
    </StyledForecastList>
  );
};

export default ForecastList;
