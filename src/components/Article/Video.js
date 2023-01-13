/* Libraries */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';
import strings from 'config/strings';
/* Components */

const Container = styled.div`
  /* Display & Box Model */
  padding:0;
  border-radius:1rem;
  // .video{
  //   max-height: ${props => props.height ? `${props.height}` : '215'};
  // }
  iframe{
    border-top-right-radius:1rem;
    border-top-left-radius:1rem;
  }
  @media ${device.mobileS} {
    .video{
      max-height: ${props => props.height ? `${props.height}` : '180px'};
    }
    iframe{
      height: 180px;
    }
  }
  @media ${device.laptop} {
    .video{
      max-height: ${props => props.height ? `${props.height}` : '215px'};
    }
    padding: 0;
    iframe{
      border-top-right-radius:1rem;
      border-top-left-radius:1rem;
      height: 215px;
    }
  }
  
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

/*const Summary = styled.p`
  padding:0 2rem;
  margin-bottom: 1rem;
  color: White;
  font-family: var(--main-font-light);
  font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 1.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;*/

const PublishAt = styled.p`
  /* Display & Box Model */
  padding:1rem 2rem;
  /* Style */
  color: White;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.2rem;
`;
const StyledNavLink = styled(NavLink)`
  /* Text */
  text-decoration: none;
`;

const Video = (props) =>
  <Container imageSrc={props.imageSrc} height={props.height}>
    <div className="video" dangerouslySetInnerHTML={{ __html: props.iframe }} />
    <StyledNavLink to={ `/${strings().ROUTE.news}/${props.slug}`}>
      <Overlay>
        <Title>
          {props.title}
        </Title>
        <PublishAt>{strings().TIME.ago(props.time)}</PublishAt>
      </Overlay>
    </StyledNavLink>
  </Container>


export default Video;
