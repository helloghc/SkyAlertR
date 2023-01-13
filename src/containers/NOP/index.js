/* Libraries */
import React from 'react';
import styled from 'styled-components';
/* Components */
import H1 from 'components/H1';
import Text from 'components/Text';
import colors from '../../config/colors2';

const Container = styled.div`
  /* Display & Box Model */
  padding: 2rem;
`;


const H2 = styled.h2`
  /* Display & Box Model */
  margin-bottom: 2rem;
  /*Style*/
  color:rgba(70, 70, 70, 1); /*Changed gray color*/
  /*Text*/
  font-family: var(--main-font-medium);
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Ul = styled.ul`
  /* Display & Box Model */
  list-style: circle;
  padding-left:2rem;
`;

const Li = styled.li`
  /* Display & Box Model */
  margin-bottom: 1rem;
  /*Style*/
  color:${colors.skyalert.gray};
  /*Text*/
  font-family: var(--main-font-light);
  font-size: 1.3rem;
`;


class NOP extends React.Component {

  render() {
    return (
      <Container>

        <H1>POLÍTICA DE PRIVACIDAD</H1>
        
      </Container>
    );
  }
}


export default NOP;
