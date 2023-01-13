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
`;

const Container = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  display: flex;
  height: ${props => props.tall ? '60rem' : '50rem'};
  /* Style */
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
`;

const Overlay = styled.div`
  /* Display & Box Model */
  position:absolute;
  padding-top: 1rem;
  bottom: 0;
  left: 0;
  width: 100%;
  /* Style */
  background: rgba(74,74,74,0.8);
  border-radius: 0 0 1rem 1rem;
  @media ${device.laptop} {
    bottom: ${props => props.has3d ? '-15px' : '0'};
    left: ${props => props.has3d ? '-15px' : '0'};
    width: ${props => props.has3d ? '60%' : '100%'};
    border-radius: ${props => props.has3d ? '1rem' : '0 0 1rem 1rem'};
  }
`;

const Title = styled.h1`
  /* Display & Box Model */
  padding:0 2rem;
  margin-bottom: 1rem;
  /* Style */
  color: White;
  /* Text */
  font-family: var(--main-font-bold);
  font-size: 2.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${device.mobileCustom} {
    font-size: 2.8rem;
  }
  @media ${device.mobileL} {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
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
  font-family: var(--main-font-medium);
  font-size: 1.5rem;
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

const LabelBanner = styled.div`
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
  background: rgb(74,74,74);
  box-shadow: var(--main-box-shadow);
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.7rem;
  text-align: center;
  text-transform: uppercase;
  @media ${device.laptop} {
    top: ${props => props.label ? '-15px' : '0'};
    left: ${props => props.label ? '-15px' : '0'};
    width: ${props => props.label ? '60%' : '100%'};
    border-radius: ${props => props.label ? '1rem' : '0 0 1rem 1rem'};
    font-size: ${props => props.label ? '2rem' : '1.8rem'};
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
  @media ${device.laptop} {
    top: ${props => props.breakingNews ? '-15px' : '0'};
    left: ${props => props.breakingNews ? '-15px' : '0'};
    width: ${props => props.breakingNews ? '33%' : '100%'};
    border-radius: ${props => props.breakingNews ? '1rem' : '0 0 1rem 1rem'};
    font-size: ${props => props.breakingNews ? '2rem' : '1.8rem'};
  }
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

const HierarchyOneFull = (props) => {
  return (
    <div>
        <MasterContainer label={props.label} breakingNews={props.breakingNews}>
        {
          props.label &&
          <LabelBanner label={props.label}>{props.label}</LabelBanner>
        }
        {
          props.breakingNews &&
          <Banner breakingNews={props.breakingNews} >Último Momento</Banner>
        }
        <Container className="container" imageSrc={props.imageSrc} label={props.label} breakingNews={props.breakingNews}>
          <Overlay has3d={props.has3d} style={{backgroundColor:props.color}}>
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
HierarchyOneFull.propTypes = {
  breakingNews: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

HierarchyOneFull.defaultProps = {
  breakingNews: false
};

export default HierarchyOneFull;
