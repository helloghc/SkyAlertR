/* Libraries */
import styled from 'styled-components';
import {device} from 'utils/media';

const Container = styled.div `
  /* Display & Box Model */
  /* padding: 2rem; */
  width: 100%;
  margin: auto;
  @media ${device.laptop} {
    /* padding: 0 2rem; */
    width: 75%;
    margin-top: 0px;
  }
  @media ${device.laptopL} {
    width: 65%;
  }
`;

export default Container;
