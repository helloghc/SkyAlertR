import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/media';
import Brand from 'components/Brand';


const BG_GRADIENT = ( theme ) => theme === 'LIGHT' 
  ? `linear-gradient(104deg, #FFFFFF 0%, #FFFFFF 100%)`
  : `linear-gradient(104deg, #3A3A3A 0%, #3A3A3A 100%)`;


const SlideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SlideDown = keyframes`
  from{
    opacity: 0;
    transform: translateY(-80px);
  }
  to{
    opacity:1;
    transform: translateY(0);
  }
`;

export const ContainerSideBar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	z-index: -10;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
	visibility: hidden;
  backface-visibility: hidden;
	width: 100%;
	height: 100%;
  transform: translate3d(50%, 0, 0);
  background: linear-gradient(135deg, ${({theme:{gradients:{ sidebar }}}) => (`${ sidebar.start } 10%, ${ sidebar.end } 100%`)}), 
    url('/images/background-sidebar.jpg');
  background-origin: content-box;
  background-position: 30% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 600ms cubic-bezier(0.4, 0.0, 0.2, 1);

  @media ${device.laptop} {
    display: none;
    z-index: -99;
  }

  &.active{
    visibility: visible;
	  transition: transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1);
	  transform: translate3d(0, 0, 0);
    z-index: 3;
  }
`;

export const Header = styled.header`
  position: relative;
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0 15px;
  background: ${({theme})=>(BG_GRADIENT(theme.NAME))};
  border-bottom: ${({theme:{sidebar:{ header }}})=>(`10px solid ${header.border}`)};
  transition: border 400ms 100ms, background 400ms 100ms;
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

export const BrandCustom = styled(Brand)`
  padding-top: 7.5px; 
  
  & svg{
    width: 120px;
    height: 70px;
  }

  &.active{
    animation: ${SlideDown} 380ms 630ms cubic-bezier(0.0, 0.0, 0.2, 1) backwards;
  }

  @media ${device.mobileS} {
    padding-top: 15px;  

    & svg{
      width: 120px;
      height: 70px;
    }
  }
  @media ${device.mobileCustom} {
    padding-top: 15px;

    & svg{
      width: 132px;
      height: 78px;
    }
  }

  @media ${device.mobileCustom} and (min-height: 600px){  
    padding-top: 25px;
  }

  @media ${device.mobileM}{  
    & svg{
      width: 145px;
      height: 88px;
    }
  }

  @media ${device.mobileL}{
    & svg{
      width: 155px;
      height: 108px;
    }
  }
`;

export const Body = styled.div`
  padding: 15px;
  flex: 0.8;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 400ms;
  overflow-y: auto;
  overflow-x: hidden;
  
`;

export const ContainerListNav = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  width: 90%;
  justify-content: space-between;
  height: 95%;
  margin: auto;
  min-height: 400px;

@media ${device.mobileM} and (min-height: 712px) {
    min-height: 560px;
  }

  &.active{
    animation: ${SlideLeft} 400ms 400ms backwards;
  }
`;

export const Item = styled.li`
  margin: 8px 0;
  width: 100%;
  background: ${({theme:{ sidebar }})=>(sidebar.item)};
  border-radius: 3px;
  transform: scale(1);
  transform-origin: center;
  transition: transform 300ms;

  &:hover, &:active{
    transform: scale(1.033);
  }

  /* &:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover, &:active{
      transform: scale(1);
    }
  } */
`;

export const ItemSideLink = styled.a.attrs({
  href:'',
  target: '_top',
})`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &:hover, &:active{
      background: ${({theme:{buttons:{ripple}}}) => (ripple.hover)};
      box-shadow:  ${({theme:{buttons:{ripple}}}) => (`0 8px 16px 0 ${ripple.shadow}`)};
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: radial-gradient(circle, ${({theme:{gradients:{ ripple }}}) => (`${ ripple.start } 10%, ${ ripple.end } 10%`)});
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 500ms, opacity 1s, background 800ms;
  }

  &:active:after{
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }

  @media ${device.mobileCustom} and  (min-height: 612px) {
    padding: 16px 0px;
  }

  @media ${device.mobileXL} {
    padding: 16px 0px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 4px;
  visibility: hidden;

  @media ${device.mobileCustom} {
    width: 35px;
    height: 35px;
    visibility: visible;
  }

  @media ${device.mobileCustom} and (min-height: 712px) {
    width: 40px;
    height: 40px;
    visibility: visible;
  }

  @media ${device.mobileL} {
    width: 45px;
    height: 45px;
  }
`;

export const Font = styled.span`
  font-size: 17px;
  font-family: var(--main-font-normal);
  text-decoration: none;
  color: ${({theme:{ sidebar }})=>(sidebar.text)};
  margin: 0 auto;
  transition: color 400ms;

  @media ${device.mobileCustom} {
    font-size: 18px;
  }

  @media ${device.mobileL} {
    font-size: 22px;
  }
`;

export const ContainerSwitch = styled.div`
  display: flex;
  align-items: center;
`;