import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";
import { useFindCitiesByCoords } from "../useFindCities";
import ForecastList from "./ForecastList";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import SpecificInfo from "./SpecificInfo";
import { MoreData } from "./styled";

const CityPage = () => {
  const { weatherData } = useFindCitiesByCoords();

  if (weatherData.status === "success") {
    return (
      <>
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
