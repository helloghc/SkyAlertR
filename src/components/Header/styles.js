import { NavLink } from 'react-router-dom';
import Brand from 'components/Brand';
import styled from 'styled-components';
import { device } from 'utils/media';

export const BrandCustom = styled(Brand)`
  display: none;

  @media ${device.laptopS} {
    display: flex;
    padding: 15px;

    & h1{
      font-size: 4.71em;
      padding: 4px 10px;
    }
  }
`;

export const HeaderNav = styled.header`
  background: ${({theme:{header}}) => (header.bg)};
  position: relative;
  z-index: 3;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  transition: background 400ms;
`;

export const HomeBrandLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
  border: none;
  transform: scale(1);
  transform-origin: center;
  transition: transform 300ms;

  &:hover, &:active{
    transform: scale(1.033);
  }
`;

