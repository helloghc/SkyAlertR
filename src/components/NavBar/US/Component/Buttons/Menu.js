import React from 'react'
import styled, { withTheme }from 'styled-components'
import PropTypes from 'prop-types';
import RippleStyled from 'components/Buttons/Ripple';
import { device } from 'utils/media';

const RippleButton = styled(RippleStyled)`
    width: 48px;
    height: 48px;
    display: block;
    margin: 0 8px;

    @media ${device.laptopS} {
        display:none;
    }
`;

const IconSVG = styled.svg`
    width: 38px;
    height: 38px;
`;

const Shape = styled.path`
    fill: ${({theme:{buttons:{ripple}}}) => (ripple.shape)};
    transition: fill 300ms 100ms;
`;

const ButtonMenu = ({ buttonMenu }) => (
    <RippleButton onClick={buttonMenu}>
        <IconSVG version='1.1'  xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'  viewBox='0 0 56 56' preserveAspectRatio='xMinYMin meet'>
            <g>
                <Shape d="M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M28,54C13.663,54,2,42.336,2,28
                    S13.663,2,28,2s26,11.664,26,26S42.337,54,28,54z"/>
                <Shape d="M15,17h26c0.553,0,1-0.448,1-1s-0.447-1-1-1H15c-0.553,0-1,0.448-1,1S14.447,17,15,17z"/>
                <Shape d="M45,31H11c-0.553,0-1,0.448-1,1s0.447,1,1,1h34c0.553,0,1-0.448,1-1S45.553,31,45,31z"/>
                <Shape d="M45,23H11c-0.553,0-1,0.448-1,1s0.447,1,1,1h34c0.553,0,1-0.448,1-1S45.553,23,45,23z"/>
                <Shape d="M41,39H15c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S41.553,39,41,39z"/>
            </g>
        </IconSVG>
    </RippleButton>
);
/* PropTypes */
ButtonMenu.propTypes = {
    buttonMenu: PropTypes.func.isRequired,
};

export default withTheme(ButtonMenu);