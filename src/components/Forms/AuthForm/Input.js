/* Libraries */
import styled from 'styled-components';
import colors from '../../../config/colors2';

const Input = styled.input`
  /* Display & Box Model */
  border-bottom-color: ${colors.skyalert.gray};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-width: 0;
  border-radius: 0;
  border-right-width: 0;
  border-top-width: 0;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  /* Style */
  background: none;
  box-shadow: none;
  color: rgba(70, 70, 70, 1); /*Changed gray color*/
  /* Text */
  font-size: 1.3rem;
  /* Other */
  transition: all 0.28s ease;
  /* Pseudo Selectors */
  &::placeholder{
    color:${colors.skyalert.gray};
  }
  &:focus, &:active{
    border-bottom-color: rgba(70, 70, 70, 1); /*Changed gray color*/
    &::placeholder{
      color:rgba(70, 70, 70, 1); /*Changed gray color*/
    }
  }
  /*
  &[type='email'] {
    background-image: url(/images/User.png);
    background-position: 5px 10px;
    background-repeat: no-repeat;
    background-size: 10px;
    padding-left: 30px;
  }
  &[type='password'] {
    background-image: url(/images/Password.png);
    background-position: 5px 10px;
    background-repeat: no-repeat;
    background-size: 10px;
    padding-left: 30px;
  }*/
`;

export default Input;
