import { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useFindCitiesByName } from "../useFindCities";
import { useSavedLocations } from "../useSavedLocations";
import CityTile from "./CityTile/CityTile";
import { StyledHeader, Search } from "./styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { saveLocation } = useSavedLocations();
  const { onFormSubmit, cityName, setCityName, foundCities, setFoundCities } =
    useFindCitiesByName();

  const clearInput = () => {
    setFoundCities([]);
    setCityName("");
  };

  return (
    <>
      <StyledHeader>
        <Search>
          <button onClick={() => navigate("/")}>Back</button>
          <form onSubmit={onFormSubmit}>
            <input
              ref={inputRef}
              onChange={({ target }) => setCityName(target.value)}
              value={cityName}
            />
          </form>
        </Search>
        <button onClick={saveLocation}>Save</button>
      </StyledHeader>
      <div>
        {foundCities &&
          foundCities.map((city) => (
            <div key={nanoid()}>
              <CityTile
                id={city.lat}
                lat={city.lat}
                lon={city.lon}
                name={city.name}
                state={city.state}
                country={city.country}
                clearInput={clearInput}
              />
              <br />
            </div>
          ))}
      </div>
    </>
  );
};

export default Header;
