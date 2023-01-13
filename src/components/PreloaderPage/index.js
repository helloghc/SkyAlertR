import React from 'react';
import styled, { withTheme, keyframes } from 'styled-components';
import { device } from 'utils/media';
import PropTypes from 'prop-types';

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;

const BG_COUNTRY = ( BG = ['#F5F5F5'], ANGLE = 113) => {
	return SYSTEM === 'US' 
		? `linear-gradient(${ANGLE}deg, ${BG[0]} 0%, ${BG[1]} 50%, ${BG[2]} 50%, ${BG[3]} 52%, ${BG[4]} 53%, ${BG[5]} 100%)`
		: BG[0];
};

const Isotype = () => (
  <IsotypeSVG xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" preserveAspectRatio="xMinYMin meet">
    <BrandSVG d="M129.92,191.64c7.58-18.75,15.28-37.47,22.6-56.3c1.39-3.57,3.65-4.71,7.56-5.09
    c11.29-1.11,22.56-2.44,35.07-3.82c-1.77-0.5-2.34-0.78-2.95-0.82c-14.08-1.15-28.17-2.19-42.24-3.47c-2.79-0.25-3.5,0.98-4.25,2.72
    c-2.95,6.84-5.92,13.68-8.93,20.5c-0.61,1.38-0.66,3.12-2.48,3.86c-1.49-0.73-1.33-1.84-1.57-2.82
    c-11.4-44.77-22.84-89.52-34.16-134.31c-0.67-2.65-1.8-3.63-4.97-3.64c-3.08-0.01-5.02,0.43-5.7,3.41
    c-1.98,8.59-4.15,17.15-6.28,25.72c-7.75,31.11-15.54,62.22-23.26,93.33c-0.75,3.01-2.14,4.84-6.15,5.13
    c-14.48,1.04-28.93,2.35-43.39,3.55c18.93,1.99,37.88,3.36,56.79,5.07c3.42,0.31,4.41-0.53,4.97-3.15
    c2.09-9.91,4.34-19.79,6.53-29.69c4.5-20.34,9-40.68,13.5-61.02c0.43-0.04,0.86-0.09,1.29-0.13c12.1,47.78,24.2,95.55,36.53,144.26
    C129.2,193.22,129.6,192.44,129.92,191.64z"/>
	</IsotypeSVG>
);

const up = keyframes`
	from {
		transform: translateY(70%);
	}
`;

const back = (color) => keyframes`
	from{
		background: ${color.from};
	}
	to{
		background: ${color.to};
	}
`;

const pulse = ({porcent_0, porcent_25, porcent_50, porcent_100}) =>keyframes`
  0% {
    box-shadow: 0 0 0 0 ${porcent_0[0]}, 0 0 0 80px ${porcent_0[1]};
  }
  25% {
      box-shadow: 0 0 0 150px ${porcent_25[0]}, 0 0 0 0 ${porcent_25[1]};
  }
  50% {
      box-shadow: 0 0 0 0 ${porcent_50[0]}, 0 0 0 40px ${porcent_50[1]};
  }
	100% {
    box-shadow: 0 0 0 0 ${porcent_100[0]}, 0 0 0 80px ${porcent_100[1]};
  }
`;

const filler = ({porcent_0, porcent_50, porcent_95, porcent_100}) => keyframes`
	0% {
		fill: ${porcent_0};
	}
	50% {
		fill: ${porcent_50};
	}
	95% {
		fill: ${porcent_95};
		stroke-dashoffset: 0;
	}
	100% {
		fill: ${porcent_100.fill};
		stroke-dashoffset: 0;
		stroke-width: 0;
		stroke: ${porcent_100.stroke};
	}
`;

const grows = keyframes`
	to {	
		transform: scale(1.035) translate(50px, 50px);
	}
`;

const Preloader = styled.div`
  position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: ${({theme:{gradients:{preloader}}})=>(BG_COUNTRY(preloader, 100))};
	display: ${({isLoading})=>(isLoading ? 'flex': 'none')};
	align-items: center;
	justify-content: center;
	z-index: 9999999;
`;

const ContainerIsotype = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	align-items: center;
  justify-content: center;
	border-radius: 50%;
	transform-origin: center center;
	filter: ${({ theme: {preloader} }) => (`drop-shadow(12px 12px 7px ${preloader.shadow})`)};
	animation: ${({theme:{preloader:{ animations }}}) =>  
	`${up} 850ms cubic-bezier(0, 0, 0.2, 1), 
		${back(animations.bg)} 1s linear 2.8s forwards,
		${pulse(animations.pulse)} 5s cubic-bezier(0.4, 0.0, 0.2, 1) 4.2s infinite forwards`
	};

	@media ${device.laptopS} {
		width: 300px;
		height: 300px;
	}
`;

const IsotypeSVG = styled.svg`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	
	@media ${device.laptopS} {
		width: 300px;
		height: 300px;
	}
`;

const BrandSVG = styled.path`
	fill: ${({ theme: {preloader} }) => (`${preloader.brand_fill}`)};
	stroke: ${({ theme: {preloader} }) => `${preloader.brand_stroke}`};
	stroke-width: 1.5;
	stroke-dasharray: 1800;
	stroke-dashoffset: 1800;
	transform-origin: center center;
	transform: scale(0.85) translate(50px, 50px);
	animation:  ${({theme:{preloader:{ animations }}}) => 
		`${filler(animations.filling)} 3s linear 950ms forwards,
		${grows} 2s cubic-bezier(0.4, 0.0, 0.2, 1) 4.5s infinite alternate`
	};
`;

const PreloaderPage = ({loading}) => (
  <Preloader isLoading={loading}>
    <ContainerIsotype>
      <Isotype />
    </ContainerIsotype>
  </Preloader>  
);

/* PropTypes */
PreloaderPage.propTypes = {
	isLoading: PropTypes.bool,
};

export default withTheme(PreloaderPage);