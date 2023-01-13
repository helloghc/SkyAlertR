/* Libraries */
import React from 'react';
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';
import strings from 'config/strings';
/* Components */
import Author from './Author';


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
    width: 13rem;
    height: 13rem;
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
  // margin-right: 1rem;
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
  font-size: 1.8rem;
  margin-bottom: 1rem;
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
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PublishAt = styled.p`
  /* Style */
  color: rgba(70, 70, 70, 1); /*Changed gray color*/
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.2rem;
  font-style:normal;
  /* Display & Box Model */
  padding:0 0 1rem 2rem;
  @media ${device.laptop} {
    padding: 0;
  }
`;

const authorBackgoundTwo = {
  background:'white',
}
const authorColorTwo = {
  color:'black',
}

const HierarchyTwo = (props) =>
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

    {props.author.type === 'author' ? (
      <Author
        name={props.author._id.name}
        slug={props.author._id.slug}
        image={props.author._id._id}
        time={props.time}
        background={authorBackgoundTwo}
        color={authorColorTwo}
        />
    ) : (
      <PublishAt>{strings().TIME.ago(props.time)}</PublishAt>
    )}


  </Container>


export default HierarchyTwo;
