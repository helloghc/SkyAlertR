/* Libraries */
import styled from 'styled-components';
import colors from '../../../config/colors2';

const CheckBoxDiv = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  border-radius: 100%;
  border: 2px solid ${colors.skyalert.gray};
  height: 20px;
  width: 20px;
  /* Style */
  background: transparent;
  label{
    /* Positioning */
    position: absolute;
    left: 3px;
    top: 3px;
    z-index: 1;
    /* Display & Box Model */
    border-radius: 100px;
    display: block;
  	height: 10px;
  	width: 10px;
    /* Style */
    background: ${colors.skyalert.gray};
    /* Other */
    cursor: pointer;
    transition: all .5s ease;
  }
  input[type="checkbox"] {
    /* Display & Box Model */
    height: 100%;
    visibility: hidden;
  }
  input[type=checkbox]:checked + label {
    /* Style */
  	background: ${colors.skyalert.white};
  }
`;

export default CheckBoxDiv;
