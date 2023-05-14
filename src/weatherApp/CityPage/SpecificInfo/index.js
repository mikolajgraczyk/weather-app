import { StyledSpecificInfo, Block, Info, InfoName, Data } from "./styled";
import { convertDate } from "../useConvertDate";

const SpecificInfo = ({ currentWeatherData }) => {

  const sunriseTimestamp = convertDate(currentWeatherData.sys.sunrise).hour;
  const sunsetTimestamp = convertDate(currentWeatherData.sys.sunset).hour;

  return (
    <StyledSpecificInfo>
      <Block>
        <Info>
          <InfoName>Pressure:</InfoName>
          <Data> {currentWeatherData.main.pressure} hPa</Data>
        </Info>
        <Info>
          <InfoName>Wind:</InfoName>
          <Data> {currentWeatherData.wind.speed} m/s</Data>
        </Info>
        <Info>
          <InfoName>Sunrise:</InfoName>
          <Data> {sunriseTimestamp}</Data>
        </Info>
      </Block>
      <Block>
        <Info>
          <InfoName>Humidity:</InfoName>
          <Data> {currentWeatherData.main.humidity}%</Data>
        </Info>
        <Info>
          <InfoName>Visibility:</InfoName>
          <Data> {currentWeatherData.visibility} m</Data>
        </Info>
        <Info>
          <InfoName>Sunset:</InfoName>
          <Data> {sunsetTimestamp}</Data>
        </Info>
      </Block>
    </StyledSpecificInfo>
  );
};

export default SpecificInfo;
