import React from 'react';
import SideBarUS from './US';
import SideBarMX from './MX';

const COUNTRY = process.env.REACT_APP_COUNTRY || 'MX';

const SideBar = ({ isActive, handleMenu, switchThemeChange }) => 
// TODO: REFACTOR COMPONENT IF YOU DO NOT WANT MORE CHANGES
COUNTRY === 'US' ? (
    <SideBarUS isActive={isActive} handleMenu={handleMenu} switchThemeChange={switchThemeChange}/>
  ) : ( 
    <SideBarMX isActive={isActive} handleMenu={handleMenu} switchThemeChange={switchThemeChange}/>
  );

export default SideBar;