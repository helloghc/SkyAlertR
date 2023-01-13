/* Libraries */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/media';
import strings from 'config/strings';
/* Components */
import Author from './Author';

const MasterContainer = styled.div`
  position:relative;
  padding-top: 3rem;
  .container{
    border-radius: 0 0 1rem 1rem;
  }
`;

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
  font-size: 2.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.mobileCustom} {
    font-size: 2.3rem;
  }
  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 2.5rem;
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

const Banner = styled.div`
  /* Positioning */
  position: absolute;
  top: 0;
  left: 0;
  z-index:5;
  /* Display & Box Model */
  padding: .5rem;
  width: 100%;
  border-top-right-radius:1rem;
  border-top-left-radius:1rem;
  /* Style */
  color: White;
  background: #ff0000;
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
  color: White;
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.2rem;
`;

const HierarchyOneBR = (props) => {
  return (
    <div>
    <MasterContainer>
      <Banner>Último Momento</Banner>
      <Container className="container" imageSrc={props.imageSrc}>
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
    </MasterContainer>
  </div>
  );
};

/* PropTypes */
HierarchyOneBR.propTypes = {
  breakingNews: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

HierarchyOneBR.defaultProps = {
  breakingNews: false
};

export default HierarchyOneBR;
