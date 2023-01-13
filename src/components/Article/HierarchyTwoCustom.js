/* Libraries */
import React from 'react';
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';
/* Components */
//import Author from './Author';


const Container = styled.div`
  /* Display & Box Model */
  border-radius:1rem;
  @media ${device.laptop} {
    padding: 0;
  }
`;

const Image = styled.div`
  /* Display & Box Model */
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  /* Style */
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media ${device.laptop} {
    width: 10rem;
    height: 10rem;
  }

`;

const Information = styled.div`
  /* Display & Box Model */
  width: 65%;
  margin-left: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  /* Display & Box Model */
  width: 35%;
  margin-right: 1rem;
  margin-top: 4%;
`;

const Content = styled.div`
  /* Display & Box Model */
  display: flex;
  margin-bottom: 1rem;
  padding:1rem 2rem 0;
  @media ${device.laptop} {
    padding: 0;
  }
`;

const Title = styled.h1`
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 2rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
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

const HierarchyTwoCustom = (props) =>
  <Container>
    <Content>
      <ImageContainer>
        <Image imageSrc={props.imageSrc}/>
      </ImageContainer>
      <Information>
        <Title>
          {props.title}
        </Title>
        <Summary>
          {props.summary}
        </Summary>
      </Information>
    </Content>
  </Container>


export default HierarchyTwoCustom;
