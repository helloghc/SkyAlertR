/* Libraries */
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';

const FullColumn = styled.div`
  display: block;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  /*loat: left;*/
  width: 100%;
  @media ${device.laptop} {
    display: none;
  }
`;

export default FullColumn;
