import {
  StyledCurrentWeatherInfo,
  CityName,
  Temp,
  TempFeelsLike,
  Condition,
} from "./styled";

const CurrentWeatherInfo = ({ currentWeatherData }) => {
  return (
    <StyledCurrentWeatherInfo>
      <CityName>{currentWeatherData.name}</CityName>
      <Temp>{currentWeatherData.main.temp.toFixed(0)} °C</Temp>
      <TempFeelsLike>
        feels like: {currentWeatherData.main.feels_like.toFixed(0)} °C
      </TempFeelsLike>
      <Condition>{currentWeatherData.weather[0].main}</Condition>
    </StyledCurrentWeatherInfo>
  );
};

export default CurrentWeatherInfo;
