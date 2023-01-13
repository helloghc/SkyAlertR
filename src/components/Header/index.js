import React from 'react';
import NavBarUS from 'components/NavBar/US';
import NavBarMX from 'components/NavBar/MX';
import { 
  HeaderNav,
  HomeBrandLink,
  BrandCustom, 
} from './styles';

const COUNTRY = process.env.REACT_APP_COUNTRY || 'MX';

const Header = ({ onRefBrand, onRefNavBar ,buttonThemeChange, buttonMenu, pastNavBar, heightNavbar}) => 
COUNTRY === 'US' ? (
  <HeaderNav>
    <HomeBrandLink to='/'>
      <BrandCustom width='200px' height='132px' onRef={onRefBrand} />
    </HomeBrandLink>
    <NavBarUS
      onRef={onRefNavBar}
      buttonThemeChange={buttonThemeChange}
      buttonMenu={buttonMenu}
      pastNavBar={pastNavBar}
      heightNavbar={heightNavbar} 
      />
  </HeaderNav>
  ) : ( 
  <NavBarMX
    onRef={onRefNavBar}
    buttonThemeChange={buttonThemeChange}
    buttonMenu={buttonMenu}
    pastNavBar={pastNavBar}
    heightNavbar={heightNavbar} 
  /> );

export default Header;
