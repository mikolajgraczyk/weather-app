import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px black solid;
  padding: 10px;

  &:last-child{
    border: none;
  }

  &:link {
    color: black;
  }

  &:visited {
    color: black;
  }

  &:active {
    color: black;
  }
`;

export const CityName = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const CityState = styled.span``;

export const Country = styled.span``;
