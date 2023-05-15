import {
  StyledCurrentWeatherInfo,
  Name,
  Temp,
  TempFeelsLike,
  Condition,
} from "./styled";

const CurrentWeatherInfo = ({ currentWeatherData }) => {
  return (
    <StyledCurrentWeatherInfo>
      <Name>{currentWeatherData.name}</Name>
      <Temp>{currentWeatherData.main.temp.toFixed(0)} °C</Temp>
      <TempFeelsLike>
        feels like: {currentWeatherData.main.feels_like.toFixed(0)} °C
      </TempFeelsLike>
      <Condition>{currentWeatherData.weather[0].description}</Condition>
    </StyledCurrentWeatherInfo>
  );
};

export default CurrentWeatherInfo;
