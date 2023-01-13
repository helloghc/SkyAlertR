import React from 'react'
import styled, { withTheme } from 'styled-components'
import { device } from 'utils/media';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: block;
    
    @media ${device.laptop} {
        display:none;
    }
`;

const SwitchLabel = styled.label`
    position: relative;
    font-size: 1.3rem;
    display: inline-block;
    margin-top: 5px;
    padding: 15px 0 16px 44px;
    margin-right: 15px;

    &:before, &:after{
        content: ' ';
        position: absolute;
        margin: 0;
        outline: 0;
        top: 37%;
        transition: all 0.3s ease;
    }

    &:before{
        left: 0;
        width: 38px;
        height: 12px;
        background-color: ${({theme:{sidebar:{ switcher }}}) => (switcher.bg)};
        border-radius: 8px;
    }

    &:after{
        top: 1.35rem;
        left: 0;
        width: 20px;
        height: 20px;
        background-color: ${({theme:{sidebar:{ switcher }}}) => (switcher.circle)};
        border-radius: 50%;
        box-shadow: 0 0 0 transparent, ${({theme:{sidebar:{ switcher }}}) => (`0 0 0 5px ${switcher.active}`)};
    }
`;

const InputHide = styled.input.attrs({
    type: 'checkbox'
})`
    display: none;

    &:checked + ${SwitchLabel}:before{
        background-color: ${({theme:{sidebar:{ switcher }}}) => (switcher.bg)};
    }

    &:checked + ${SwitchLabel}:after{
        background-color: ${({theme:{sidebar:{ switcher }}}) => (switcher.circle)};
        box-shadow: 0 0 0 transparent, ${({theme:{sidebar:{ switcher }}}) => (`0 0 0 5px ${switcher.active}`)};
        transform: translate(100%, 0%);
    }
`;

const SwitchTheme = ({ switchThemeChange }) => (
    <Container>
        <InputHide id='switch-select' onChange={e => switchThemeChange(e)}/>
        <SwitchLabel htmlFor='switch-select'>&nbsp;</SwitchLabel>
    </Container>
);

/* PropTypes */
SwitchTheme.propTypes = {
    switchThemeChange: PropTypes.func.isRequired,
};

export default withTheme(SwitchTheme);
