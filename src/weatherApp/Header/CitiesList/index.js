import CityTile from "../CityTile";
import { nanoid } from "@reduxjs/toolkit";
import { useFindCitiesByName } from "../../useFindCities";
import { StyledCitiesList } from "./styled";

const CitiesList = ({ foundCities }) => {
  const { setCityName, setFoundCities } = useFindCitiesByName();

  const clearInput = () => {
    setFoundCities([]);
    setCityName("");
  };

  return (
    <StyledCitiesList>
      {foundCities &&
        foundCities.map((city) => (
          <CityTile
            key={nanoid()}
            id={city.lat}
            lat={city.lat}
            lon={city.lon}
            name={city.name}
            state={city.state}
            country={city.country}
            clearInput={clearInput}
          />
        ))}
    </StyledCitiesList>
  );
};

export default CitiesList;
