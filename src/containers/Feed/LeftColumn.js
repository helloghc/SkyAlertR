/* Libraries */
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';

const LeftColumn = styled.div`
  display: none;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
  width: 50%;
  @media ${device.laptop} {
    display: block;
  }
`;


export default LeftColumn;
