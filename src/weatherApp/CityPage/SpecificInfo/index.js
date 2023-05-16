import { StyledSpecificInfo, Block, Info, InfoName, Data } from "./styled";
import { convertDate } from "../useConvertDate";
import {
  WindIcon,
  PressureHighIcon,
  PressureLowIcon,
  SunriseIcon,
  SunsetIcon,
  HumidityIcon,
  StarIcon,
} from "../../weatherIcons/index";

const SpecificInfo = ({ currentWeatherData }) => {
  const sunriseTimestamp = convertDate(currentWeatherData.sys.sunrise).hour;
  const sunsetTimestamp = convertDate(currentWeatherData.sys.sunset).hour;

  return (
    <StyledSpecificInfo>
      <Block>
        <Info>
          <InfoName>Pressure:</InfoName>
          <Data> {currentWeatherData.main.pressure} hPa</Data>
          {currentWeatherData.main.pressure > 1013 ? (
            <PressureHighIcon />
          ) : (
            <PressureLowIcon />
          )}
        </Info>
        <Info>
          <InfoName>Wind:</InfoName>
          <Data> {currentWeatherData.wind.speed} m/s</Data>
          <WindIcon />
        </Info>
        <Info>
          <InfoName>Sunrise:</InfoName>
          <Data> {sunriseTimestamp}</Data>
          <SunriseIcon />
        </Info>
      </Block>
      <Block>
        <Info>
          <InfoName>Humidity:</InfoName>
          <Data> {currentWeatherData.main.humidity}%</Data>
          <HumidityIcon />
        </Info>
        <Info>
          <InfoName>Visibility:</InfoName>
          <Data> {currentWeatherData.visibility} m</Data>
          <StarIcon />
        </Info>
        <Info>
          <InfoName>Sunset:</InfoName>
          <Data> {sunsetTimestamp}</Data>
          <SunsetIcon />
        </Info>
      </Block>
    </StyledSpecificInfo>
  );
};

export default SpecificInfo;
