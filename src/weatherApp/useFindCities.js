import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useFindCitiesByName = () => {
  const [usersInput, setUsersInput] = useState("");
  const [foundCities, setFoundCities] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (usersInput.trim() === "") {
      return;
    }

    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${usersInput}&limit=10&appid=f13069042423dc1787a2b509c28143d5&lang=pl`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => removeDuplicates(data))
      .catch((error) => console.error(error));
  };

  const removeDuplicates = (data) => {
    const uniqueCities = [
      ...new Map(data.map((city) => [city.state, city])).values(),
    ];
    setFoundCities(uniqueCities);
  };

  return {
    onFormSubmit,
    usersInput,
    setUsersInput,
    foundCities,
    setFoundCities,
  };
};

export const useFindCitiesByCoords = () => {
  const [weatherData, setWeatherData] = useState({});

  const { search } = useLocation();
  const lat = +new URLSearchParams(search).get("lat");
  const lon = +new URLSearchParams(search).get("lon");

  const fetchForCurrentWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f13069042423dc1787a2b509c28143d5`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData((prevState) => ({
          ...prevState,
          currentWeatherStatus: "success",
          current: data,
        }));
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => {
          setWeatherData({
            currentWeatherStatus: "error",
          });
        }, 500);
      });
  };

  const fetchForForecast = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=f13069042423dc1787a2b509c28143d5`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData((prevState) => ({
          ...prevState,
          forecast: data,
        }));
        setTimeout(() => {
          setWeatherData((prevState) => ({
            ...prevState,
            forecastStatus: "success",
          }));
        }, 500);
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => {
          setWeatherData({
            forecastStatus: "error",
          });
        }, 500);
      });
  };

  useEffect(() => {
    setWeatherData({
      status: "loading",
    });
    fetchForCurrentWeather();
    fetchForForecast();
  }, [lat, lon]);

  return { weatherData };
};
