/* Libraries */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  align-items: center;
  border-radius: 0 0 50% 50%;
  display: flex;
  height: 140px;
  justify-content: center;
  width: 100%;
  /* Style */
  background: White;
`;


const Image = styled.img`
  width: 130px;
`;


const Header = () =>
  <Container>
    <Image src="/images/logo.png" />
  </Container>

export default Header;
