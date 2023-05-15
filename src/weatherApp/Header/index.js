import { useRef } from "react";
import { useFindCitiesByName } from "../useFindCities";
import { useSavedLocations } from "../useSavedLocations";
import CitiesList from "./CitiesList/index";
import {
  StyledHeader,
  BackToHomepageButton,
  LeftArrowIcon,
  MagnifyingGlassIcon,
  StarIcon,
  Form,
  Input,
  Search,
  SaveButton,
} from "./styled";
import { useNavigate } from "react-router-dom";

const Header = ({ location }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { onClickSaveButton, isLocationSaved } = useSavedLocations();
  const { onFormSubmit, cityName, foundCities, setCityName } =
    useFindCitiesByName();

  return (
    <>
      <StyledHeader>
        <Search>
          <BackToHomepageButton
            location={location}
            onClick={() => navigate("/home")}
          >
            <LeftArrowIcon />
          </BackToHomepageButton>
          <Form onSubmit={onFormSubmit}>
            <Input
              ref={inputRef}
              onChange={({ target }) => setCityName(target.value)}
              value={cityName}
              placeholder="Search"
            />
          </Form>
          <MagnifyingGlassIcon />
        </Search>
        <SaveButton
          location={location}
          issaved={isLocationSaved().toString()}
          onClick={onClickSaveButton}
        >
          <StarIcon />
        </SaveButton>
      </StyledHeader>
      {foundCities && <CitiesList foundCities={foundCities} />}
    </>
  );
};

export default Header;
