/* Libraries */
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';

const ImageBg = styled.div `
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  display: flex;
  height: 25rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  /* Style */
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: var(--main-box-shadow);
  h1{
    color: White;
    margin-top:auto;
    text-shadow: 2px 2px Black;
  }
  @media ${device.laptop} {
    height: 47rem;
    padding: 2rem 10rem;
  }
`;

export default ImageBg;
