/* Libraries */
import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors2'
/* Utils */
import {device} from 'utils/media';
import strings from 'config/strings';
/* Components */
import Author from './Author';

const Container = styled.div`
  /*Positioning*/
  position: relative;
`;

const Banner = styled.div`
  /* Display & Box Model */
  width: 0;
  height: 0;
  border-top: 7rem solid rgba(70, 70, 70, 1); /*Changed gray color*/
  border-left: 13rem solid transparent;
  &:after{
    content:'Patrocinado';
    position: absolute;
    color:${colors.skyalert.white};
    text-transform: uppercase;
    font-family: var(--main-font-medium);
    font-size: 1rem;
    font-style:oblique;
    top: 1rem;
    right: 1rem;
  }
`;

const BannerContainer = styled.div`
  /*Positioning*/
  position: absolute;
  top:0;
  right: 0;
  /* Display & Box Model */
  width: 13rem;
  height: 7rem;
  border-top-right-radius: 1rem;
  overflow: hidden;
`;

const Image = styled.div`
  /* Display & Box Model */
  border-radius: 0.5rem;
  width: 8rem;
  height: 12rem;
  /* Style */
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

`;

const Information = styled.div`
  /* Display & Box Model */
  width: 55%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  /* Display & Box Model */
  width: 30%;
`;

const Content = styled.div`
  /* Display & Box Model */
  display: flex;
  margin-bottom: 1rem;
  padding: 0 2rem;
`;

const Title = styled.h1`
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.7rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.laptop} {
    font-size: 1.7rem;
  }
`;

const Summary = styled.p`
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PublishAt = styled.p`
  /* Display & Box Model */
  padding: 0 2rem 1rem;
  /* Style */
  color: rgba(70, 70, 70, 1); /*Changed gray color*/
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.2rem;
`;

const HierarchyTwo = (props) =>
  <Container>
    <BannerContainer>
      <Banner/>
    </BannerContainer>
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
      />
    ) : (
      <PublishAt>{strings().TIME.ago(props.time)}</PublishAt>
    )}
  </Container>


export default HierarchyTwo;
