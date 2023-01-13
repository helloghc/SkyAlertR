/* Libraries */
import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/media';
/* Components */
//import Author from './Author';

const Container = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  display: flex;
  height: 35rem;
  /* Style */
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius:1rem;
`;

const Overlay = styled.div`
  /* Display & Box Model */
  margin-top: auto;
  padding-top: 1rem;
  width: 100%;
  /* Style */
  background: rgba(74,74,74,0.8);
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
`;

const Title = styled.h1`
  /* Display & Box Model */
  padding:0 2rem;
  margin-bottom: 1rem;
  /* Style */
  color: White;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 2.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.laptop} {
    font-size: 2rem;
    -webkit-line-clamp: 3;
  }
`;

const Summary = styled.p`
  /* Display & Box Model */
  padding:0 2rem;
  margin-bottom: 1rem;
  /* Style */
  color: White;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 1.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.laptop} {
    -webkit-line-clamp: 3;
  }
`;

const HierarchyOneCustom = (props) => {
  return (
    <Container imageSrc={props.imageSrc}>
      <Overlay>
        <Title>
          {props.title}
        </Title>
        <Summary>
          {props.summary}
        </Summary>
      </Overlay>
    </Container>
  );
};

export default HierarchyOneCustom;
