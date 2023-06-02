import { useEffect } from "react";
import ErrorScreen from "../../common/ErrorScreen";
import LoadingScreen from "../../common/LoadingScreen";
import { useFindCitiesByCoords } from "../useFindCities";
import ForecastList from "./ForecastList";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import SpecificInfo from "./SpecificInfo";
import { MoreData } from "./styled";
import Header from "../Header";
import rainbackground from "./BackgroundImages/rainbackground.jpg";
import clearbackground from "./BackgroundImages/clearbackground.jpg";
import cloudsbackground from "./BackgroundImages/cloudsbackground.jpg";
import snowbackground from "./BackgroundImages/snowbackground.jpg";
import brokenclouds from "./BackgroundImages/brokenclouds.jpg";
import scatteredclouds from "./BackgroundImages/scatteredclouds.jpg";
import fewclouds from "./BackgroundImages/fewclouds.jpg";
import thunderstorm from "./BackgroundImages/thunderstorm.jpg";
import { Container } from "../../common/container";

const CityPage = () => {
  const { weatherData } = useFindCitiesByCoords();

  const selectBackground = () => {
    const currentCondition = weatherData.current.weather[0].main;
    const currentConditionDescription =
      weatherData.current.weather[0].description;

    switch (currentCondition) {
      case "Rain":
        document.body.style.backgroundImage = `url('${rainbackground}')`;
        break;
      case "Clear":
        document.body.style.backgroundImage = `url('${clearbackground}')`;
        break;
      case "Fog":
      case "Clouds":
        if (currentConditionDescription === "overcast clouds") {
          return (document.body.style.backgroundImage = `url('${cloudsbackground}')`);
        } else if (currentConditionDescription === "broken clouds") {
          return (document.body.style.backgroundImage = `url('${brokenclouds}')`);
        } else if (currentConditionDescription === "scattered clouds") {
          return (document.body.style.backgroundImage = `url('${scatteredclouds}')`);
        } else if (currentConditionDescription === "few clouds") {
          return (document.body.style.backgroundImage = `url('${fewclouds}')`);
        }
        break;
      case "Snow":
        document.body.style.backgroundImage = `url('${snowbackground}')`;
        break;
      case "Thunderstorm":
        document.body.style.backgroundImage = `url('${thunderstorm}')`;
        break;
      default:
        document.body.style.backgroundColor = "lightblue";
    }
  };
  
  if (
    weatherData.currentWeatherStatus === "success" &&
    weatherData.forecastStatus === "success"
  ) {
    selectBackground();

    return (
      <Container location="cityPage">
        <Header />
        <CurrentWeatherInfo currentWeatherData={weatherData.current} />
        <MoreData>
          <ForecastList forecastData={weatherData.forecast} />
          <SpecificInfo currentWeatherData={weatherData.current}></SpecificInfo>
        </MoreData>
      </Container>
    );
  }

  if (weatherData.status === "loading") {
    return <LoadingScreen />;
  }

  if (
    weatherData.currentWeatherStatus === "error" ||
    weatherData.forecastStatus === "error"
  ) {
    return <ErrorScreen />;
  }
};

export default CityPage;
