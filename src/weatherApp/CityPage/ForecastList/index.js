import { nanoid } from "@reduxjs/toolkit";
import { convertDate } from "../useConvertDate";
import {
  StyledForecastList,
  ForecastTile,
  ForecastHour,
  ForecastTemp,
  ForecastWeekday,
} from "./styled";
import {
  ClearIcon,
  CloudyIcon,
  ThunderstormIcon,
  MistIcon,
  RainIcon,
  SnowIcon,
  DrizzleIcon,
  FogIcon,
  TornadoIcon,
} from "../weatherIcons/index";

const ForecastList = ({ forecastData }) => {
  const selectIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <ClearIcon />;
      case "Clouds":
        return <CloudyIcon />;
      case "Thunderstorm":
        return <ThunderstormIcon />;
      case "Rain":
        return <RainIcon />;
      case "Mist":
        return <MistIcon />;
      case "Snow":
        return <SnowIcon />;
      case "Drizzle":
        return <DrizzleIcon />;
      case "Fog":
        return <FogIcon />;
      case "Tornado":
        return <TornadoIcon />;
    }
  };

  return (
    <StyledForecastList>
      {forecastData.list.map((element) => {
        const { hour, dayOfTheWeek } = convertDate(element.dt);
        const icon = selectIcon(element.weather[0].main);

        return (
          <ForecastTile key={nanoid()}>
            <ForecastHour>{hour}</ForecastHour>
            <ForecastTemp>{element.main.temp.toFixed(0)} °C</ForecastTemp>
            <>{icon}</>
            <ForecastWeekday>{dayOfTheWeek}</ForecastWeekday>
          </ForecastTile>
        );
      })}
    </StyledForecastList>
  );
};

export default ForecastList;
