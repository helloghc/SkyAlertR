import React from 'react'
import styled, { withTheme } from 'styled-components';
// import PropTypes from 'prop-types';
import RippleStyled from 'components/Buttons/Ripple';

const RippleButton = styled(RippleStyled)`
    padding: 8px 6px;
    width: 48px;
    height: 48px;
`;

const IconSVG = styled.svg`
    height: 30px;
    width: 30px;
`;

const Shape = styled.path`
    fill: ${({theme:{buttons:{ripple}}}) => (ripple.shape)};
    transition: fill 300ms 100ms;
`;

const ButtonSearch = ( ) => (
    <RippleButton>
        <IconSVG version='1.1'  xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'  viewBox='0 0 485.213 485.213'>
            <g>
                <Shape d='M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951
                    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46
                    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465
                    C318.424,257.208,257.206,318.416,181.956,318.416z'/>

                <Shape d='M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324
                    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z'/>
            </g>
        </IconSVG>
    </RippleButton>
);


export default withTheme(ButtonSearch);