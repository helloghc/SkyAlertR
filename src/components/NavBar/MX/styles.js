
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Brand from 'components/Brand';
import { device } from 'utils/media';

const BG_GRADIENT = ( theme ) => theme === 'LIGHT' ? `#FFFFFF` : `#383838`;

const slideDown = keyframes`
  from{
    opacity: 0;
    transform: translateY(-100px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from{
    opacity: 0;
    transform: translateY(3px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  width: 98.5%;
  margin-left: auto;
  animation: ${({pastNavBar}) => `${pastNavBar ? slideDown : slideUp} 400ms cubic-bezier(0.0, 0.0, 0.2, 1) forwards`};
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

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  flex: 0.1; 
  align-items: center;
`;

export const BrandLeft = styled(Brand)`
    width: 106px;
    height: 64px;

  @media ${device.mobileS} {
    margin-left: 0;
  }

  @media ${device.laptop} {
    margin-left:${({pastNavBar}) => pastNavBar ? '30px' : '0'};
    width: ${({pastNavBar}) => pastNavBar ? '100px': 'unset'};
    height: ${({pastNavBar}) => pastNavBar ? '32px': '97px'};
  }
`;

export const Center = styled.div`
  flex: 0.8;
  display: flex !important;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    flex: 0.9;
  }
`;

export const ContainerListNav = styled.ul`
  display: none !important;

  @media ${device.laptop} {
    flex: auto;
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin: 0px 5px;
  padding: 5px 4px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover ul, &:active ul{
    display: flex;
    flex-flow: column nowrap;

    &:before{
      display: block;
    }
  }

  /*  TODO: ITEM ADD CLASS FOR ACTIVE*/
  /* &:first-child:before,
  &:first-child:after{
    height: 100%;
    opacity: 1;
  } */
  
  &:hover:before, &:active:before {
    width: 100%;
    opacity: 1;
  }

  &:before{
    content: '';
    position: absolute;
    width: 0%;
    height: 5px;
    left: 0px;
    border-radius: 3px;
    background: ${({theme:{navbar:{ bg }}}) => (bg.link)};
    user-select: none;
    opacity: 0;
    transition: width 300ms 100ms, opacity 300ms, border 300ms;
  }
  
  &:before{
    bottom: -5px;
  }
`;

export const ItemNavLink = styled.a.attrs({
  href:'',
  target: '_top',
})`
  color: ${({theme:{ navbar }}) => (navbar.text)};
  text-decoration: none;
  font-family: var(--main-font-bold);
  font-weight: bolder;
  font-size: 16px;
  padding: 8px 10px;
  position: relative;
  z-index: 2;
  transition: color 400ms;
  white-space: nowrap;
`;

export const ItemContainer = styled.ul`
  display: none;
  position: absolute; 
  top: ${({top})=>(`${top + 45 }px`)};
  left: -5px;
  padding: 4px;
  background: ${({theme:{navbar:{children}}}) => (children.bg)};
  border-radius: 3px;
  box-shadow: ${({theme:{ navbar:{children:{ shadow }}}}) => (`0 10px 20px ${shadow.first}, 0 6px 6px ${shadow.second}`)};
  animation: ${slideUp} 300ms ease forwards;
  z-index: 5;

  &:before{
    content: ' ';
    display: none;
    height: 20px;
    width: 100%;
    margin-top: -20px;
    z-index: -1;
  }
`;

export const ItemChildren = styled.li`
  margin: 1px 0;
  display: flex;
`;

export const ChildrenNavLink = styled(ItemNavLink)`
  cursor: pointer;
  text-decoration: none;
  padding: 8px 16px;
  border: 0;
  color: ${({theme:{navbar:{children:{link}}}}) => (link.text)};
  width: 100%;
  border-left: 3px solid transparent;
  transition: background 300ms, border 300ms, color 300ms;

  &:hover, &:active{
    background: ${({theme:{navbar:{children:{link}}}}) => (link.hoverBg)};
    color: ${({theme:{navbar:{children:{link}}}}) => (link.hoverText)};
  }
`;

export const Right = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Nav = styled.nav`
  position: relative;
  top: 0;
  padding: 5px;
  width: 100%;
  background: ${({theme})=>(BG_GRADIENT(theme.NAME))};
  transition: all 400ms;
  box-shadow: ${({pastNavBar}) => !pastNavBar ? 'transparent' : '0 2px 8px 0 #0000004d'};
  z-index: 10;

  &:before{
    content: ' ';
    position: relative;
    z-index: 1;
  }

  &:after{
    content: ' ';
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: -10;
    height: 20px;
    width: 100%;
    background: transparent;
    box-shadow: ${({theme:{navbar}}) => (`0px 0px 0px ${navbar.shadow}`)};
  }
  @media ${device.mobileS}{
    height: 75px;
  }

  @media ${device.laptop}{
    height: ${({pastNavBar}) => pastNavBar ? 'auto' :'110px'};
  }

  @media ${device.laptop}{
    padding: 16px;
    padding-left: 0;
  }

  &.sticky{
    position:fixed;
    top: 0;
    z-index: 99999;

    &:after{
      box-shadow: ${({theme:{navbar}}) => (`0px 8px 10px ${navbar.shadow}`)};
    }
  }
`;