import CityTile from "./CityTile";
import { nanoid } from "@reduxjs/toolkit";
import { StyledCitiesList } from "./styled";

const CitiesList = ({ foundCities, location }) => {

  return (
    <StyledCitiesList location={location}>
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
          />
        ))}
    </StyledCitiesList>
  );
};

export default CitiesList;
