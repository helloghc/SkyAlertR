import styled, { withTheme } from 'styled-components';

const Buttons = styled.button`
    cursor: pointer;
    width: 52px;
    height: 52px;
    padding: 5px;
    position: relative;
    border: none;
    outline: none;
    color: inherit;
    text-decoration: none;
    user-select: none;
    border-radius: 50%;
    background-position: center;
    background-color: ${({theme:{buttons:{ripple}}}) => (ripple.bg)};
    transition: background-color 150ms, box-shadow 150ms;
    overflow: hidden;
    z-index: 2;

    &:hover, &:active{
        background: ${({theme:{buttons:{ripple}}}) => (ripple.hover)};
        box-shadow:  ${({theme:{buttons:{ripple}}}) => (`0 4px 16px 0 ${ripple.shadow}`)};
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: radial-gradient(circle, ${({theme:{gradients:{ ripple }}}) => (`${ ripple.start } 10%, ${ ripple.end } 10%`)});
        background-repeat: no-repeat;
        background-position: 50%;
        backface-visibility: hidden;
        transform-origin: center;
        transform: scale(10);
        opacity: 0;
        border-radius: 50%;
        transition: transform .5s, opacity 1s, background .8s;
    }

    &:active:after{
        transform: scale(0);
        opacity: 0.3;
        transition: 0s;
    }
`;

export default withTheme(Buttons);