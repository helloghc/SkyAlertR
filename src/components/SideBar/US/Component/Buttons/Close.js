import React from 'react';
import styled, { withTheme } from 'styled-components';
import RippleStyled from 'components/Buttons/Ripple';
import PropTypes from 'prop-types';

const RippleButton = styled(RippleStyled)`
    position: absolute;
    top: 15px;
    left: 15px;
    width: 45px;
    height: 45px;
    padding: 11px;
    z-index: 2;
`;

const IconSVG = styled.svg`
  width: 23px;
  height: 23px;
`;

const Shape = styled.path`
    fill: ${({theme:{buttons:{ripple}}}) => (ripple.shape)};
    transition: fill 300ms 100ms;
`;

const Close = ({ handleMenu }) => (
    <RippleButton onClick={ handleMenu }>
        <IconSVG version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9 21.9' xlink='http://www.w3.org/1999/xlink' >
            <Shape d='M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0
                c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4 
                s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3 
                s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7 
                s-0.1-0.5-0.3-0.7L14.1,11.3z'/>
        </IconSVG>
    </RippleButton>
);

/* PropTypes */
Close.propTypes = {
    handleMenu: PropTypes.func.isRequired,
};

export default withTheme(Close);