/* Libraries */
import React from 'react';
import styled from 'styled-components';

/* Utils */
import {device} from 'utils/media';
import strings from 'config/strings';
/* Components */
import Author from './Author';

const Container = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  display: flex;
  flex-flow: column wrap;
  border-radius: 10px;
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

const Overlay = styled.div`
  /* Display & Box Model */
  border-radius: 0 0 1rem 1rem;
  padding-top: 1rem;
`;

const Title = styled.h1`
  /* Display & Box Model */
  padding:0 2rem;
  margin-bottom: 1rem;
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const Summary = styled.p`
  /* Display & Box Model */
  padding:0 2rem;
  margin-bottom: 1rem;
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 1.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Banner = styled.div`
  /* Display & Box Model */
  border-radius: 1rem 1rem 0 0;
  padding: .5rem;
  width: 100%;
  /* Style */
  color: White;
  background: rgb(74,74,74);
  box-shadow: var(--main-box-shadow);
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.7rem;
  text-align: center;
  text-transform: uppercase;
`;

const PublishAt = styled.p`
  /* Display & Box Model */
  padding:1rem 2rem;
  /* Style */
  color: rgba(70, 70, 70, 1); /*Changed gray color*/;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.2rem;
`;


const HierarchyOne = (props) =>
  <Container>
    <Banner>Opinion</Banner>
    <ImageContainer imageSrc={props.imageSrc}/>
    <Overlay>
      <Title>
        {props.title}
      </Title>
      <Summary>
        {props.summary}
      </Summary>
      {props.author.type === 'author' ? (
        <Author
          name={props.author._id.name}
          slug={props.author._id.slug}
          image={props.author._id._id}
          time={props.time}
        />
      ) : (
        <PublishAt>{strings().TIME.ago(props.time)}</PublishAt>
      )}
    </Overlay>
  </Container>


export default HierarchyOne;
