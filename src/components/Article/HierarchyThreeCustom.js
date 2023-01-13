/* Libraries */
import React from 'react';
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';
/* Components */
import PublishAt from './PublishAt';

const Container = styled.div`
  /* Display & Box Model */
  padding:1rem 2rem;
  border-radius:1rem;
  @media ${device.laptop} {
    padding: 0;
  }
`;
const ImageContainer = styled.div`
  /* Display & Box Model */
  width: 100%;
  height: 20rem;
  /* Style */
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled.h1`
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 2.1rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const Summary = styled.p`
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.6rem;
  letter-spacing: 0;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const HierarchyThreeCustom = (props) =>
  <Container>
    <ImageContainer imageSrc={props.imageSrc}/>
    <Title>
      {props.title}
    </Title>
    <Summary>
      {props.summary}
    </Summary>
  </Container>


export default HierarchyThreeCustom;
