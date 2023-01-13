/* Libraries */
import React from 'react';
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';
/* Components */
import PublishAt from './PublishAt';
import strings from 'config/strings';

const Container = styled.div`
  /* Display & Box Model */
  padding:1rem 2rem;
  border-radius:1rem;
  @media ${device.laptop} {
    padding: 0;
  }
`;

const Title = styled.h1`
  /* Display & Box Model */
  margin-bottom: 2rem;
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 2.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const HierarchyFour = (props) =>
  <Container>
    <Title>
      {props.title}
    </Title>
    <PublishAt>
      {strings().TIME.ago(props.time)}
    </PublishAt>
  </Container>


export default HierarchyFour;
