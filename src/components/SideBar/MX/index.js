import React from 'react';
import ReactGA from 'react-ga';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import URLs from 'config/URLs';
import { 
  ContainerSideBar,
  ContainerListNav,
  ContainerSwitch,
  Header,
  HomeBrandLink,
  BrandCustom,
  Body,
  Item,
  ItemSideLink,
  Icon,
  Font,
} from './styles';
import ButtonClose from './Component/Buttons/Close';
import SwitchTheme from './Component/SwitchTheme';
import strings from 'config/strings';

const SideBarMx = ({ isActive, handleMenu, switchThemeChange}) => (
  <ContainerSideBar className={ isActive && 'active' }>
    <Header>
      <ButtonClose handleMenu={handleMenu}/>
      <HomeBrandLink to='/' onClick={handleMenu}>
        <BrandCustom className={ isActive && 'active' }
          show 
          width='155px' 
          height='108px' 
          />
      </HomeBrandLink>
    </Header>
    <Body>
      <ContainerListNav className={ isActive && 'active'}>
        {
          Object.values(URLs.LIST_SIDE).map(({text, url, img}, index) => (
            <Item key={`${text}-${index + 1}`}>
              <ItemSideLink 
                href={url} 
                onClick={()=>{
                  ReactGA.event({
                    category: 'News',
                    action: `Open url`,
                    label: `Click redirecting - ${text}`
                  })
                }}>
                <Font>{ text }</Font>
              </ItemSideLink>
            </Item>
          ))
        } 
        {/* <Item>
          <ContainerSwitch>
            <Icon src={`/images/moon.png`} alt='Moon'/>
            <Font>{strings().SIDEBAR.themeMode}</Font>
          </ContainerSwitch>
          <SwitchTheme switchThemeChange={switchThemeChange}/>
        </Item> */}
      </ContainerListNav>
    </Body>
  </ContainerSideBar>
);

/* PropTypes */
SideBarMx.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  switchThemeChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default withTheme(SideBarMx);
