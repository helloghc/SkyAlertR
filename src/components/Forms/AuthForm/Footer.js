/* Libraries */
import React from 'react';
import styled from 'styled-components';
import colors from '../../../config/colors2';

const Container = styled.div`
  /* Positioning */
  position: relative;
  bottom:0;
  /* Display & Box Model */
  /*align-items: center;*/
  display: flex;
  flex-flow: column wrap;
  height: 150px;
  justify-content: center;
  /* Style */
  background: ${colors.skyalert.white};
`;


const Image = styled.img`
  width: 20px;
  vertical-align: middle;
`;

const Text = styled.span`
  /* Display & Box Model */
  margin-left: 25px;
  /* Style */
  color: rgba(70, 70, 70, 1); /*Changed gray color*/
  /* Text */
  font-size: 1rem;
  font-weight: bolder;
  text-transform: uppercase;
`;

const SocialLink = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  margin: 0 auto;
  width: 70%;
  padding: .75rem 0
`;


const Footer = () =>
  <Container>
    <SocialLink>
      <Image src="/images/facebook.png" width="7px"/>
      <Text> Iniciar Sesión con Facebook</Text>
    </SocialLink>
    <SocialLink>
      <Image src="/images/twitter.png" width="7px"/>
      <Text> Iniciar Sesión con Twitter</Text>
    </SocialLink>
    <SocialLink>
      <Image src="/images/google.png" width="7px"/>
      <Text> Iniciar Sesión con Google + </Text>
    </SocialLink>
  </Container>

export default Footer;
