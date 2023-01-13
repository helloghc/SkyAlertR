import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import URLs from 'config/URLs';
import ReactGA from 'react-ga';
import ButtonTheme from './Component/Buttons/Theme';
import ButtonMenu from './Component/Buttons/Menu';
import {
  Nav,
  ContainerNav, 
  Left,
  Center,
  HomeBrandLink,
  BrandLeft,
  ContainerListNav,
  ItemContainer,
  Item,
  ItemChildren,
  ItemNavLink,
  ChildrenNavLink,
  Right,
} from './styles';

const BRAND_SIZE = {
  WIDTH: '100px',
  HEIGHT: '58px',
};

class NavBar extends Component {

  analyticsEvents = (page) => {
    ReactGA.event({
      category: 'News',
      action: `Open url`,
      label: `Click redirecting - ${page}`
    })
  }

  renderChildren = (children, heightNavbar) =>(
    <ItemContainer top={heightNavbar}>
      {
        Object.values(children).map(({text, url}) => (
          <ItemChildren key={text}>
            <ChildrenNavLink href={url} onClick={()=>this.analyticsEvents(text)}>
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
        Object.values(URLs.LIST_NAV).map(({text, url, children}, index) => (
          <Item key={`${text}-${index + 1}`}>
              <ItemNavLink href={url} onClick={()=>this.analyticsEvents(text)}>
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
          <Left>
            <HomeBrandLink to='/' onClick={()=>this.analyticsEvents('home')}>
              <BrandLeft width={WIDTH} height={HEIGHT} pastNavBar={pastNavBar}/>
            </HomeBrandLink>
          </Left>
          <Center>
            { this.renderListNav(pastNavBar, heightNavbar) }
          </Center>
          <Right pastNavBar={pastNavBar}>
            <ButtonTheme buttonThemeChange={buttonThemeChange} />
            <ButtonMenu buttonMenu={buttonMenu}/>
          </Right>
        </ContainerNav>
      </Nav>
    );
  }
}

export default withTheme(NavBar);
