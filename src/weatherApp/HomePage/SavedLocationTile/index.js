import {
  StyledLink,
  NameAndIcon,
  LocationName,
  CurrentLocationTemp,
  CurrentLocationWeather,
} from "./styled";
import { selectIcon } from "../../selectIcon";

const SavedLocationTile = ({ location }) => {
  return (
    <StyledLink
      to={{
        pathname: `/city/${location.id}`,
        search: `?lat=${location.lat}&lon=${location.lon}`,
      }}
      key={location.id}
    >
      <NameAndIcon>
        <LocationName>{location.name}</LocationName>
        {selectIcon(location.weather)}
      </NameAndIcon>
      <CurrentLocationWeather>{location.weather}</CurrentLocationWeather>
      <CurrentLocationTemp>{location.temp.toFixed(0)}°C</CurrentLocationTemp>
    </StyledLink>
  );
};

export default SavedLocationTile;
