import { Link } from "react-router-dom";

const CityTile = ({ id, lat, lon, name, state, country, clearInput }) => {
  return (
    <Link 
    to={{ pathname: `/city/${id}`, search: `?lat=${lat}&lon=${lon}` }}
    onClick={clearInput}
    >
      {name} {state} {country}
    </Link>
  );
};

export default CityTile;
