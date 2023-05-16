import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
  height: 120px;
  border-radius: 12px;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  position: relative;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: none;
  }
`;

export const NameAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LocationName = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export const CurrentLocationTemp = styled.span`
  position: absolute;
  font-weight: 600;
  font-size: 32px;
  right: 16px;
  bottom: 8px;
`;

export const CurrentLocationWeather = styled.span`
  font-weight: 300;
`;
