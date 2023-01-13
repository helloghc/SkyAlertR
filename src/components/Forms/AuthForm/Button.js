/* Libraries */
import styled from 'styled-components';
import colors from '../../../config/colors2';

const Button = styled.button`
  /* Display & Box Model */
  border-radius: 30px;
  border: 2px solid rgba(70, 70, 70, 1); /*Changed gray color*/
  display: block;
  margin: 2rem auto 0;
  padding: 1.5rem;
  width: 20rem;
  /* Style */
  background: transparent;
  color: rgba(70, 70, 70, 1); /*Changed gray color*/
  /* Text */
  font-size: 1.5rem;
  text-transform: uppercase;
  /* Other */
  cursor: pointer;
  /* Pseudo Selectors */
  &:hover, &:focus, &:active{
    background: rgba(70, 70, 70, 1); /*Changed gray color*/
    border: 2px solid rgba(70, 70, 70, 1); /*Changed gray color*/
    color:${colors.skyalert.white};
  }
  &:disabled{
    opacity:0.8;
    pointer-events: none;
  }
`;

export default Button;
