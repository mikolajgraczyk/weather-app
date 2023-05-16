import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px grey solid;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);

  &:last-child{
    border: none;
  }

  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:active {
    color: white;
  }
`;

export const CityName = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const CityState = styled.span``;

export const Country = styled.span``;
