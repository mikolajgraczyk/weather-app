import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const getDataFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("savedLocations")) || [];

export const useSavedLocations = () => {
  const [savedLocations, setSavedLocations] = useState(
    getDataFromLocalStorage()
  );

  const { search } = useLocation();
  const lat = new URLSearchParams(search).get("lat");
  const lon = new URLSearchParams(search).get("lon");

  const isLocationSaved = () => {
    return savedLocations.some(
      (location) => location.lat === lat && location.lon === lon
    );
  };

  const addLocation = () => {
    setSavedLocations((prevState) => [
      ...prevState,
      {
        lat,
        lon,
      },
    ]);
  };

  const removeLocation = () => {
    setSavedLocations(
      savedLocations.filter(
        (location) => location.lat !== lat && location.lon !== lon
      )
    );
  };

  const onClickSaveButton = () => {
    if (isLocationSaved()) {
      removeLocation();
      return;
    }
    addLocation();
    return;
  };

  useEffect(() => {
    localStorage.setItem("savedLocations", JSON.stringify(savedLocations));
  }, [savedLocations]);

  return { savedLocations, onClickSaveButton, isLocationSaved };
};
