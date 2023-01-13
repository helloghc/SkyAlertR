/* Libraries */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.25);
  background-image: url(/images/loading.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 3.5rem;
`;


const Loading = (props) =>
  <Container/>

export default Loading;
