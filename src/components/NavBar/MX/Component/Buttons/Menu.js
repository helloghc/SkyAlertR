import React from 'react'
import styled, { withTheme }from 'styled-components'
import PropTypes from 'prop-types';
import RippleStyled from 'components/Buttons/Ripple';
import { device } from 'utils/media';

const RippleButton = styled(RippleStyled)`
    width: 45px;
    height: 45px;
    margin: auto;
    padding: 5px;
    background-color: transparent!important;
    border-radius: 0% !important;
    opacity: 1;
    margin-top: 4px;
    margin-right: 20px;

    &:hover, &:active{
        opacity: 0.6;
        box-shadow: none;
    }

    &:after, &:before{
        content: '';
        display: none !important;
    }

    @media ${device.laptop} {
        display:none;
    }
`;

const IconSVG = styled.svg`
    width: 45px;
    height: 45px;
    margin-left: -6px;
`;

const Shape = styled.path`
    fill: ${({theme})=>(theme.NAME === 'LIGHT' ? '#373a47': '#FFFFFF')} ;
    transition: fill 300ms 100ms;
`;

const ButtonMenu = ({ buttonMenu }) => (
    <RippleButton onClick={buttonMenu}>
        <IconSVG version='1.1'  xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'  viewBox='0 0 32 32' height='32px' width='32px' preserveAspectRatio='xMidYMid meet'>
            <g>
                <Shape d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
            </g>
        </IconSVG>
    </RippleButton>
);
/* PropTypes */
ButtonMenu.propTypes = {
    buttonMenu: PropTypes.func.isRequired,
};

export default withTheme(ButtonMenu);