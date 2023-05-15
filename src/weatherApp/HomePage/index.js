import { useState, useEffect } from "react";
import Header from "../Header";
import { useSavedLocations } from "../useSavedLocations";
import { Link } from "react-router-dom";
import LoadingScreen from "../../common/LoadingScreen";
import ErrorScreen from "../../common/ErrorScreen";

const HomePage = () => {
  const [savedLocationsData, setSavedLocationsData] = useState([]);
  const [status, setStatus] = useState("loading");

  const { savedLocations } = useSavedLocations();

  const fetchForData = (lat, lon) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f13069042423dc1787a2b509c28143d5`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setSavedLocationsData((prevState) => [
          ...prevState,
          {
            id: data.id,
            name: data.name,
            lat,
            lon,
            temp: data.main.temp,
            weather: data.weather[0].main,
          },
        ]);
        setTimeout(() => {
          setStatus("success");
        }, 500);
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => {
          setStatus("error");
        }, 500);
      });
  };

  useEffect(() => {
    savedLocations.forEach((location) => {
      fetchForData(location.lat, location.lon);
    });
  }, []);

  if (status === "success") {
    return (
      <>
        <Header location="homePage" />
        {savedLocationsData.map((location) => {
          return (
            <Link
              to={{
                pathname: `/city/${location.id}`,
                search: `?lat=${location.lat}&lon=${location.lon}`,
              }}
              key={location.id}
            >
              {location.name} {location.temp.toFixed(0)} °C
              <br />
            </Link>
          );
        })}
      </>
    );
  }

  if (savedLocations.length < 1) {
    return (
      <>
        <Header location="homePage" />
        Brak zapisanych miast
      </>
    );
  }

  if (status === "loading") {
    return <LoadingScreen />;
  }

  if (status === "error") {
    return <ErrorScreen />;
  }
};

export default HomePage;
