import { useState, useEffect } from "react";
import { useSavedLocations } from "../useSavedLocations";

const HomePage = () => {
  const [savedLocationsData, setSavedLocationsData] = useState([]);
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
            lat: data.coord.lat,
            lon: data.coord.lon,
            temp: data.main.temp,
            weather: data.weather[0].main,
          },
        ]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    savedLocations.forEach((location) => {
      fetchForData(location.lat, location.lon);
    });
  }, []);

  return (
    <>
    {savedLocationsData.map(location => {
      return(
        <div key={location.id}>
          {location.name} 
        </div>
      );
    })}
    </>
  );
};

export default HomePage;
