/* Libraries */
import styled from 'styled-components';
import {device} from 'utils/media';

const Container = styled.div `
  /* Display & Box Model */
  padding: 0 2rem 2rem;

  @media ${device.mobileS} {
    margin-top: 60px;
  }

  @media ${device.laptop} {
    margin-top: 0px;
  }
`;

export default Container;
