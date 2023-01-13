/* Libraries */
import styled from 'styled-components';

const HR = styled.hr `
  /* Display & Box Model */
    height: 32px;
    border-top: 5px solid gray;
    display: ${props => props.last ? 'none' : 'block'};
`;

export default HR;
