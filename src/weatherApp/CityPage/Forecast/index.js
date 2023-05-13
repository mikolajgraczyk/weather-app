import { nanoid } from "@reduxjs/toolkit";
import {
  StyledForecastList,
  ForecastTile,
  ForecastHour,
  ForecastTemp,
  ForecastWeekday,
} from "./styled";

const ForecastList = ({ weatherData }) => {
  const convertDate = (timestamp) => {
    const unix_timestamp = timestamp;
    const date = new Date(unix_timestamp * 1000);

    const hour = date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dayOfTheWeek = date.toLocaleDateString(undefined, {
      weekday: "long",
    });

    return {
      hour,
      dayOfTheWeek,
    };
  };

  return (
    <StyledForecastList>
      {weatherData.forecast.list.map((element) => {
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
