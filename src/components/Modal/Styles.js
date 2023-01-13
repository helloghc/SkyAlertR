import styled, { keyframes } from 'styled-components';
import { device } from '../../utils/media';

const PulseAnimation = keyframes`
    0%, 100% { 
    transform: scale(0);
  } 50% { 
    transform: scale(1);
  }
`;

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    width: 85vw;
    z-index: 2000;
    margin: 40px auto;
    transition: opacity linear 320ms;

    &.fade {
        transition: opacity linear 320ms;

        &-in{
            opacity: 1;
        }
        &-out{
            opacity: 0;
        }
    }

    @media ${device.laptop} {
        width: 70vw;
    }

    @media ${device.laptopL} {
        width: 60vw;
    }
`;

export const ModalBackground = styled.div`
    display: block;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
    background: rgb(125, 125, 125, 50%);
`;

export const ModalContainer = styled.section`
    border-radius: 8px;
    width: 100%;
    height: 85vh;
    min-height: 85vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    z-index: 1050;
    position: relative;
    font-family: 'Raleway',sans-serif;

    @media ${device.laptop} {
        flex-flow: row nowrap;
    }
`;

export const ModalCompleted = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius: 8px;
    position: relative;
    width: auto;
    z-index: 1050;
    padding: 2.5em;

    @media ${device.laptop} {
        width: 65%;
    }
`;

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

export const SideImage = styled.div`
    display: none;
    flex: 35%;
    background: #fbd4a1 url('/images/modal/epicenter/background.png') no-repeat bottom;
    background-size: cover;
    border-radius: 8px;
    width: 95%;
    position: absolute;
    opacity: 0.75;
    top: -35px;
    height: 185px;
    z-index: -2;
    transition: opacity, width 320ms;

    @media ${device.tablet} {
        display: flex;
    }

    @media ${device.laptop} {
        opacity: 1;
        border-radius: 8px 0 0 8px;
        position: relative;
        top: unset ;
        z-index: 1;
        height: auto;
        width: 100%;
    }   
`;

export const SideForm = styled(Container)`
    flex: 1;
    padding: 2em;
    background-color: #ffffff;
    border-radius: 8px;
    position: relative;
    overflow-y: auto;

    @media ${device.laptop} {
        border-radius: 0 8px 8px 0;
        flex: 65%;
    }   
`;

export const LoaderContainer = styled(Container)`
    position: absolute;
    height: 600px;
    width: 100%;
    bottom: 0;
    justify-content: center;
    background: rgb(255, 255, 255, 85%);
    z-index: 10;
`;

export const LoaderBounce = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    margin-top: -90px;
    border-radius: 50%;
    opacity: 0.5;
    animation: ${PulseAnimation} 1.5s infinite cubic-bezier(0.0, 0.0, 0.2, 1);

    &:nth-of-type(1){
        background-color: #2866ff55;
        z-index: 11;
    }

    &:nth-of-type(2){
        background-color: #2866ff85;
        animation-delay: -750ms;
        z-index: 12;
    }
`;

export const FormHeader = styled(Container)`
    margin: auto;
    height: auto;
`;

export const FormBody = styled(Container)`
    flex: 1;
    width: 100%;
    padding: 0;
`;

export const FormFields = styled.form`
    align-self: stretch;
    height: 100%;
    padding: 0;
    user-select: none;
    @media ${device.tablet} {
        padding: 0 20px;
    }
`;

export const FieldContainer = styled(Container)`
    margin: 0.5em auto;
    align-items: baseline;
    padding: 5px 0;
    position: relative;
`;

export const FieldTextsContainer = styled(Container)`
    flex-flow: row wrap;
    justify-content: space-between;
    position: relative;
    align-self: stretch;
`;

const Labels = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
    letter-spacing: 1.25px;
    cursor: unset;
`;

export const FieldLabel = styled(Labels)`
    color: #aeaeae;
    font-size: 16px;
    text-align: left;
    margin-bottom: 5px;
    letter-spacing: 1.25px;
`;

export const FieldMessageError = styled(Labels)`
    font-size: 14px;
    cursor: unset;
    color: #D32F2F;
    letter-spacing: normal;
    background: #D32F2F25;
    padding: 5px;
    border-radius: 4px;
`;

export const FieldWrapper = styled(Container)`
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-self: stretch;
    padding: 5px;
    margin-top: 3px;
    border-radius: 8px;
    border: 2px solid ${({focus}) => !focus ? '#c1c1c1' : '#ff7700'};
    transition: border 320ms ease;
    position: relative;
    overflow: hidden;
    opacity: 1;

    &.error{
        border: 2px solid #FF5252;
    }

    &.disabled{
        opacity: 0.5;
    }
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    display: inline-block;
    opacity: ${({focus}) => !focus ? 1 : 0.75};
    filter: ${({focus}) => !focus ? 'none' : 'invert(52%) sepia(66%) saturate(3322%) hue-rotate(1deg) brightness(103%) contrast(104%)'};
    transition: opacity 320ms ease;

    &.error {
        filter: invert(44%) sepia(42%) saturate(1723%) hue-rotate(325deg) brightness(102%) contrast(111%);
    }
`;

export const FieldCustomText = styled.input`
    width: 100%;
    font-size: 14px;
    margin-left: 5px;
    border: none;
    padding: 8px 5px;
    border-radius: 4px;
    transition: background 320ms ease;
    background-color: transparent;
    color: #222222;

    &:invalid {
        color: #FF5252;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const FieldCustomSelect = styled.select`
    height: 40px;
    width: calc(100% - 40px);
    margin-left: 5px;
    font-size: 14px;
    color: #222222;
    border-radius: 0 8px 8px 0;
    position: absolute;
    right: 0;
    z-index: 0;
    left: 38px;
    border: none;
    appearance: none;
    background-image:
    linear-gradient(45deg, transparent 50%, #ffffff 50%),
    linear-gradient(135deg, #ffffff 50%, transparent 50%),
    linear-gradient(to right, #ff7700, #ff7700);
    background-position:
        calc(100% - 15px) calc(1em + 4px),
        calc(100% - 10px) calc(1em + 4px),
        100% 0;
    background-size:
        5px 5px,
        5px 5px,
        2em 3em;
    background-repeat: no-repeat;

    &::-ms-expand {
        display: none;
    }
`;

export const FieldCustomSelectOpt = styled.option``;

export const FieldCustomPhone = styled.div`
    position: absolute;
    left: 45px;
    bottom: 12px;
    width: calc(100% - 52px);

    & .react-tel-input {
        font-size: 14px;

        & :disabled {
            opacity: 0.5;
        }

        & .selected-flag {
            border-radius: 4px;
            transition: 320ms;
        }

        & .flag-dropdown {
            background: transparent;
            border: none;

            &.open .selected-flag {
                background-color: #cacaca55;
                border-radius: 4px;
            }
        }
        
        & .form-control {
            border: none;
            background: transparent;
            height: 30px;
            width: 100%;
            padding-left: 40px;

            & :disabled {
            opacity: 0.5;
            }
        }
    }
`;

export const Required = styled.span`
    color: #ff0000;
    font-size: 18px;
    font-weight: bold;
    margin-left: -5px;
`;

export const FormFooter = styled(Container)`
    margin: auto;
    flex: 0.15;
    width: 100%;
    justify-content: space-around;
`;

export const LogoEpicenter = styled.img`
    height: 50%;
    margin: 1em 0 0 0;

    @media ${device.mobileL} {
        margin: 0;
        height: 65%;
    }

    @media ${device.tablet} {
        margin-top: -2em;
        height: 150px;
    }   
`;

export const LogoSkyAlert = styled.img`
    height: 100px;
    margin: 0.5em 1em;

    @media ${device.mobileL} {
        height: 120px;
    }

    @media ${device.tablet} {
        height: 150px;
    }   
`;

export const Title = styled.h1`
    letter-spacing: 1.75px;
    text-align: center;
    font-weight: 300 !important;
    margin-top: -0.25em;
    margin-bottom: 5px;
    font-size: 2.25rem;
    color: #4e4e4e;
    font-family: 'Raleway',sans-serif;
`;

export const TitleCompleted = styled.h1`
    letter-spacing: 1.75px;
    text-align: center;
    font-weight: bold;
    color: #ff5400;
    margin: 5px auto;
    font-size: 2.5em;

    @media ${device.tablet} {
        font-size: 3.5em;
    }   
    
`;

export const ContainerTexts = styled.div`
    margin: 1.5em auto;
    padding-bottom: 1em;
`;

export const Paragraph = styled.p`
    color: #222222;
    text-align: center;
    margin: 1px auto;
    font-size: 15px;
`;

export const MessageError = styled.div`
    background-color: #d32f2f;
    color: #ffffff;
    margin: 5px auto;
    padding: 10px 15px;    
    border-radius: 4px;
    font-size: 14px;
    width: calc(100% - 45px);
    margin-top: 10px;
`;

export const ButtonClose = styled.button`
    outline: 0;
    border: 0;
    font-size: 35px;
    line-height: 35px;
    font-weight: 400;
    color: #aeaeae;
    cursor: pointer;
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;
    right: 10px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        opacity: 0.5;
    }
`;

export const ButtonSend = styled.button`
    background-image: linear-gradient(to right, #ff7700 0%, #f09819  51%, #ff5400  100%);
    background-size: 200% auto;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    min-width: 64px;
    line-height: 1.75;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    justify-content: center;
    padding: 6px 24px;
    text-align: center;
    white-space: nowrap;
    font-size: 18px;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    transition: 320ms;
    width: 100%;

    &:hover, &:active {
        background-position: right center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    }

    &.disabled{
        opacity: 0.5;
    }

    @media ${device.tablet} {
        width: 50%;
    }

    @media ${device.laptop} {
        width: auto;
    }   
`;

