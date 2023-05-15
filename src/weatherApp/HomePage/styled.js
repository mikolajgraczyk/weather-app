import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  &:link {
    color: white;
    text-decoration: none;
  }

  &:visited {
    color: white;
  }

  &:active {
    color: white;
  }
`;
