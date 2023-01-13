import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/media';
import Brand from 'components/Brand';

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
  background: ${({theme:{sidebar:{ header }}})=>(header.bg)};
  border-bottom: ${({theme:{sidebar:{ header }}})=>(`4px solid ${header.border}`)};
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
    width: 100px;
    height: 54px;
  }

  & h1{
    display: none;
  }
  
  &.active{
    animation: ${SlideDown} 380ms 630ms cubic-bezier(0.0, 0.0, 0.2, 1) backwards;
  }

  @media ${device.mobileS} {
    padding-top: 15px;  

    & svg{
      width: 100px;
      height: 54px;
    }

    & h1{
      font-size: 18px;
      margin-left: 3.25px;
      padding: 4px 8px;
      display: block;
    }
  }
  @media ${device.mobileCustom} {
    padding-top: 15px;

    & svg{
      width: 102px;
      height: 68px;
    }
    & h1{
      font-size: 28px;
      margin-left: 4px;
    }
  }

  @media ${device.mobileCustom} and (min-height: 600px){  
    padding-top: 25px;
  }

  @media ${device.mobileM}{  
    & svg{
      width: 105px;
      height: 68px;
    }
    & h1{
      font-size: 32px;
    }
  }

  @media ${device.mobileL}{
    & svg{
      width: 125px;
      height: 88px;
    }
    & h1{
      font-size: 36px;
      margin-left: 10px;
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
  border-bottom: ${({theme:{ sidebar }})=>(`15px solid ${sidebar.bodyBorder}`)};
  transition: border 400ms;
  overflow-y: auto;
  overflow-x: hidden;
  
  @media ${device.mobileCustom} and (min-height: 712px) {
    border-bottom: ${({theme:{ sidebar }})=>(`30px solid ${sidebar.bodyBorder}`)};
  }
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
  margin: 10px 0;
  width: 100%;
  background: ${({theme:{ sidebar }})=>(sidebar.item)};
  border-radius: 3px;
  transform: scale(1);
  transform-origin: center;
  transition: transform 300ms;

  &:hover, &:active{
    transform: scale(1.033);
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover, &:active{
      transform: scale(1);
    }
  }
`;

export const ItemSideLink = styled.a.attrs({
  href:'',
  target: '_top',
})`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
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
    padding: 4px 0px;
  }

  @media ${device.mobileXL} {
    padding: 8px 0px;
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
  font-size: 18px;
  font-family: var(--main-font-light);
  text-decoration: none;
  color: ${({theme:{ sidebar }})=>(sidebar.text)};
  transition: color 400ms;

  @media ${device.mobileCustom} {
    font-size: 22px;
  }
`;

export const ContainerSwitch = styled.div`
  display: flex;
  align-items: center;
`;