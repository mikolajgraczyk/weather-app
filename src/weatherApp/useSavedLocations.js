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

  const saveLocation = () => {
    setSavedLocations((prevState) => [
      ...prevState,
      {
        lat,
        lon,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("savedLocations", JSON.stringify(savedLocations));
  }, [savedLocations]);

  return { savedLocations, saveLocation };
};
