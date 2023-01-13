/* Libraries */
import styled from 'styled-components';
import colors from '../../../config/colors2';

const Select = styled.select`
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
  -webkit-appearance: none;
  background: url(/images/arrow.png) no-repeat right center / 1.3rem;
  box-shadow: none;
  color:${colors.skyalert.gray};
  /* Text */
  font-size: 1.3rem;
  /* Other */
  /*Pseudo Selectors*/
  &:focus, &:active{
    border-bottom-color: rgba(70, 70, 70, 1); /*Changed gray color*/
    color: rgba(70, 70, 70, 1); /*Changed gray color*/
  }
`;

export default Select;
