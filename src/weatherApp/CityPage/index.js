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

const CityPage = () => {
  const { weatherData } = useFindCitiesByCoords();

  const selectBackground = () => {
    const currentCondition = weatherData.current.weather[0].main;

    switch (currentCondition) {
      case "Rain":
        document.body.style.backgroundImage = `url('${rainbackground}')`;
        break;
      case "Clear":
        document.body.style.backgroundImage = `url('${clearbackground}')`;
        break;
      case "Clouds":
      case "Mist":
        document.body.style.backgroundImage = `url('${cloudsbackground}')`;
        break;
      case "Snow":
        document.body.style.backgroundImage = `url('${snowbackground}')`;
        break;
      default:
        document.body.style.backgroundColor = "lightblue";
    }
  };

  if (weatherData.status === "success") {
    selectBackground();

    return (
      <>
        <Header />
        <CurrentWeatherInfo currentWeatherData={weatherData.current} />
        <MoreData>
          <ForecastList forecastData={weatherData.forecast} />
          <SpecificInfo currentWeatherData={weatherData.current}></SpecificInfo>
        </MoreData>
      </>
    );
  }

  if (weatherData.status === "loading") {
    return <LoadingScreen />;
  }

  if (weatherData.status === "error") {
    return <ErrorScreen />;
  }
};

export default CityPage;
