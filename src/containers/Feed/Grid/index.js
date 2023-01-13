import styled, { keyframes } from 'styled-components';
import { device } from 'utils/media';

const slideUp = keyframes`
    from{
        opacity: 0;
        transform: translateY(15px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(1, 1fr);

    @media ${device.mobileS}{
        padding: 0 15px 30px;
    }

    @media ${device.tablet}{
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.laptopS}{
        padding: 0 0 30px;
    }

    @media ${device.laptopL}{
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.desktop}{
        grid-template-columns: repeat(4, 1fr);
    }

    & > a{
        align-self: stretch;
        justify-self: stretch;
        animation: ${slideUp} 500ms ease-out backwards;

        @media ${device.mobileS}{
            &:first-child{
                margin-top: 0;
            }
        }

        @media ${device.tablet}{
            &:first-child{
                margin-top: unset;
            }
        }

        &:nth-child(1n+0) {
            animation-delay: 350ms;
        }

        &:nth-child(2n+0) {
        animation-delay: 450ms;
        }

        &:nth-child(3n+0) {
            animation-delay: 550ms;
        }
    }
`;

export default Container;