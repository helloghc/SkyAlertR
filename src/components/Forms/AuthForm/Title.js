/* Libraries */
import styled from 'styled-components';
import { device } from 'utils/media';

const Title = styled.h1`
  /* Display & Box Model */
  /*margin-top:8rem;*/

  /* Style */
  color: rgba(70, 70, 70, 1); /*Changed gray color*/
  /* Text */
  font-size: 2.5rem;
  font-family: var(--main-font-bold);
  text-align: center;
  text-transform: uppercase;
   @media ${device.mobileS} {
      margin-bottom: 0rem;

  }
  @media ${device.desktop} {
      margin-bottom: 2rem;
  }
`;

export default Title;
