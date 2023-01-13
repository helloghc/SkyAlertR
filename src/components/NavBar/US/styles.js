
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Brand from 'components/Brand';
import { device } from 'utils/media';

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
  flex: 1;
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
  
  @media ${device.laptopS} {
    display: ${({pastNavBar}) => pastNavBar ? 'flex': 'none'};
    margin-left: ${({pastNavBar}) => pastNavBar ? '15px' : '0'};
  }
`;

export const BrandLeft = styled(Brand)`
  display: none;

  & h1{
    display:none;  
  }
  @media ${device.laptopS} {
    display: flex;
  }

  @media ${device.laptop}{
    & h1{
      display: block;
      font-size: 21px;
      padding: 8px 10px;
    }
  }
`;

export const Center = styled.div`
  flex: 0.8;
  display: flex !important;
  justify-content: center;
  align-items: center;

  @media ${device.laptopS} {
    flex: 0.9;
  }
`;

export const BrandCenter = styled(Brand)`
  & h1{
    display: none;
    margin-left: 0;
  }
  @media ${device.mobileS} {
    & h1{
      display: block;
      font-size: 18px;
      margin-left: 3.25px;
      padding: 4px 8px;
    }
  }
  
  @media ${device.mobileCustom} {
    & h1{
      font-size: 22px;
      margin-left: 7.5px;
    }
  }
  
  @media ${device.mobileM} {
    margin-left: 15px;
  }
  
  @media ${device.laptopS} {
    display: none;
    & h1{
      display:none;  
    }
  }
`;

export const ContainerListNav = styled.ul`
  display: none !important;

  @media ${device.laptopS} {
    flex: auto;
    display: flex !important;
    justify-content: ${({pastNavBar}) => pastNavBar ? 'center': 'flex-start'};
    align-items: center;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin: 0px 10px;
  padding: 10px 4px;
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
  
  &:hover:before, &:active:before, 
  &:hover:after, &:active:after {
    height: 100%;
    opacity: 1;
  }

  &:before, &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0px;
    border-radius: 3px;
    background: ${({theme:{navbar:{ bg }}}) => (bg.link)};
    user-select: none;
    opacity: 0;
    transition: height 400ms 300ms, opacity 300ms, border 300ms;
  }

  &:before{
    top: 0;
  }
  
  &:after{
    bottom: 0;
  }
`;

export const ItemNavLink = styled.a.attrs({
  href:'',
  target: '_top',
})`
  color: ${({theme:{ navbar }}) => (navbar.text)};
  text-decoration: none;
  font-family: var(--main-font-regular);
  font-size: 18px;
  padding: 8px 10px;
  position: relative;
  z-index: 2;
  transition: color 400ms;
`;

export const ItemContainer = styled.ul`
    display: none;
    position: absolute; 
    top: ${({top})=>(`${top - 13}px`)};
    left: -5px;
    padding: 4px;
    background: ${({theme:{navbar:{children}}}) => (children.bg)};
    border-radius: 3px;
    box-shadow: ${({theme:{ navbar:{children:{ shadow }}}}) => (`0 10px 20px ${shadow.first}, 0 6px 6px ${shadow.second}`)};
    animation: ${slideUp} 300ms ease forwards;

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
  text-decoration: none;
  padding: 8px 16px;
  border: 0;
  color: ${({theme:{navbar:{children:{link}}}}) => (link.text)};
  width: 100%;
  border-left: 3px solid transparent;
  transition: background 300ms, border 300ms, color 300ms;

  &:hover, &:active{
    background: ${({theme:{navbar:{children:{link}}}}) => (link.hoverBg)};
    border-left: ${({theme:{navbar:{children:{link}}}}) => (`3px solid ${link.border}`)};
    color: ${({theme:{navbar:{children:{link}}}}) => (link.hoverText)};
  }
`;

export const Right = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > button {
    margin: 0 8px;
  }
`;

export const Nav = styled.nav`
  position: relative;
  top: 0;
  padding: 5px;
  width: 100%;
  background: ${({theme:{navbar:{bg}}}) => (bg.primary)};
  transition: all 400ms;
  box-shadow: 0px 0px 8px 0px #0000004d;

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

  @media ${device.laptopS}{
    padding: 8px;
    background: ${({theme:{navbar:{ bg }}, pastNavBar}) => ( pastNavBar ? bg.primary : bg.secondary)};
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