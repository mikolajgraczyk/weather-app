import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";
import { useFindCitiesByCoords } from "../../useFindCities";
import ForecastList from "./Forecast";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import { MoreData } from "./styled";

const CityPage = () => {
  const { weatherData } = useFindCitiesByCoords();

  if (weatherData.status === "success") {
    return (
      <>
        <CurrentWeatherInfo currentWeatherData={weatherData.current} />
        <MoreData>
          <ForecastList weatherData={weatherData} />
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
