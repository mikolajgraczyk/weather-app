import { StyledLink, CityName, CityState, Country } from "./styled";

const CityTile = ({ id, lat, lon, name, state, country }) => {
  return (
    <StyledLink
      to={{ pathname: `/city/${id}`, search: `?lat=${lat}&lon=${lon}` }}
    >
      <CityName>{name} </CityName>
      <CityState>{state} </CityState>
      <Country>{country}</Country>
    </StyledLink>
  );
};

export default CityTile;
