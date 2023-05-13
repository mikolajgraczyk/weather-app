import { StyledSpecificInfo, Block, Info } from "./styled";
import { convertDate } from "../useConvertDate";

const SpecificInfo = ({ currentWeatherData }) => {
  console.log(currentWeatherData);

  const sunriseTimestamp = convertDate(currentWeatherData.sys.sunrise).hour;
  const sunsetTimestamp = convertDate(currentWeatherData.sys.sunset).hour;

  return (
    <StyledSpecificInfo>
      <Block>
        <Info>Pressure: {currentWeatherData.main.pressure} hPa</Info>
        <Info>Wind: {currentWeatherData.wind.speed} m/s</Info>
        <Info>Sunrise: {sunriseTimestamp}</Info>
      </Block>
      <Block>
        <Info>Humidity: {currentWeatherData.main.humidity}%</Info>
        <Info>Visibility: {currentWeatherData.visibility} m</Info>
        <Info>Sunset: {sunsetTimestamp}</Info>
      </Block>
    </StyledSpecificInfo>
  );
};

export default SpecificInfo;
