import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import URLs from 'config/URLs';
import ButtonTheme from './Component/Buttons/Theme';
// import ButtonSearch from './Component/Buttons/Search';
import ButtonMenu from './Component/Buttons/Menu';
import {
  Nav,
  ContainerNav, 
  Left,
  Center,
  HomeBrandLink,
  BrandLeft,
  BrandCenter,
  ContainerListNav,
  ItemContainer,
  Item,
  ItemChildren,
  ItemNavLink,
  ChildrenNavLink,
  Right,
} from './styles';

const BRAND_SIZE = {
  WIDTH: '82px',
  HEIGHT: '49px',
};

class NavBarUS extends Component {

  renderChildren = (children, heightNavbar) =>(
    <ItemContainer top={heightNavbar}>
      {
        Object.values(children).map(({text, url}) => (
          <ItemChildren key={text}>
            <ChildrenNavLink href={url}>
              { text }
            </ChildrenNavLink>
          </ItemChildren>
        ))
      }
    </ItemContainer>
  );

  renderListNav = (pastNavBar, heightNavbar) => (
    <ContainerListNav pastNavBar={pastNavBar}>
      {
        Object.values(URLs.LIST_NAV).map(({text, url, children}) => (
          <Item key={text}>
              <ItemNavLink href={url}>
                { text }
              </ItemNavLink>
              { children && this.renderChildren(children, heightNavbar) }
          </Item>
        ))
      }
    </ContainerListNav>
  );

  render() {
    const { pastNavBar, onRef, buttonThemeChange, buttonMenu, heightNavbar} = this.props;
    const { WIDTH, HEIGHT} = BRAND_SIZE;
    return (
      <Nav pastNavBar={pastNavBar} innerRef={onRef} className={pastNavBar && 'sticky'}>
        <ContainerNav pastNavBar={pastNavBar}>
          <Left pastNavBar={pastNavBar}>
            <ButtonMenu buttonMenu={buttonMenu}/>
            <HomeBrandLink to='/'>
              <BrandLeft show={pastNavBar} width={WIDTH} height={HEIGHT} subheader={pastNavBar} />
            </HomeBrandLink>
          </Left>
          <Center>
            { this.renderListNav(pastNavBar, heightNavbar) }
            <HomeBrandLink to='/'>
              <BrandCenter show width={WIDTH} height={HEIGHT} subheader/>
            </HomeBrandLink>
          </Center>
          <Right>
            {/* <ButtonSearch /> */}
            <ButtonTheme buttonThemeChange={buttonThemeChange} />
          </Right>
        </ContainerNav>
      </Nav>
    );
  }
}

/* PropTypes */
NavBarUS.propTypes = {
  buttonMenu: PropTypes.func.isRequired,
  buttonThemeChange: PropTypes.func.isRequired,
  heightNavbar: PropTypes.number.isRequired,
  onRef: PropTypes.object,
  pastNavBar: PropTypes.bool.isRequired,
}

export default withTheme(NavBarUS);
