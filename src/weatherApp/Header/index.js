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
  const navigate = useNavigate();
  const { onClickSaveButton, isLocationSaved } = useSavedLocations();
  const { onFormSubmit, usersInput, foundCities, setUsersInput } =
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
              onChange={({ target }) => setUsersInput(target.value)}
              value={usersInput}
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
      {foundCities.length > 0 && (
        <CitiesList foundCities={foundCities} location={location} />
      )}
    </>
  );
};

export default Header;
