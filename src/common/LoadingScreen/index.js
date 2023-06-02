import { StyledLoadingScreen, StyledLoadingIcon } from "./styled";
import { Container } from "../container";

const LoadingScreen = () => {
  return (
    <Container>
      <StyledLoadingScreen>
        <StyledLoadingIcon />
      </StyledLoadingScreen>
    </Container>
  );
};

export default LoadingScreen;
