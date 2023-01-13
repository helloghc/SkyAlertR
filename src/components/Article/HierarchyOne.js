/* Libraries */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme }from 'styled-components';
import {device} from 'utils/media';
import strings from 'config/strings';
/* Components */
import Author from './Author';


//TODO: REFACTOR COLORS
const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;

const BORDER_COUNTRY = SYSTEM === 'US' ? ' var(--main-border-radius)' : ' var(--main-border-radius) var(--main-border-radius) 0 0';


const BG_STYLE = (COUNTRY, NAME) => COUNTRY === 'US' 
  ? `linear-gradient(rgba(0,0,0,0.25) 0%,rgba(0,0,0,0.25) 90%, ${NAME === 'LIGHT' ? 'rgb(250,250,250,1)': 'rgba(92, 92, 92, 1)'} 100%)`
  : 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1))';

const ArticleHeader = styled.div`
  border-radius: ${BORDER_COUNTRY};
  margin: 0;
  overflow: hidden;
`;

const CoverImage = styled.div`
  border-radius: ${BORDER_COUNTRY};
  position: relative;
  overflow: hidden;
  background-image: url(${({imageSrc}) => (imageSrc ? imageSrc : '/images/background-article.jpg')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 305px;
  min-height: 305px;
  transform-origin: center;
  transform: scale(1);
  ${({theme}) => (`${theme.NAME === 'LIGHT' ? 'filter: gray(0)' : 'filter: brightness(0.8)'}`)};
  transition: transform 550ms, filter 400ms;
  z-index: 1;
  
  &:after{
    content: '';
    border-radius: ${BORDER_COUNTRY};
    width: 100%;
    height: 100%;
    background: ${({theme: {NAME}})=> BG_STYLE(SYSTEM, NAME)};
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const ArticleContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 16px;
`;

const Title = styled.h1`
  flex: 1 1 auto;
  padding-bottom: 10px;
  color: ${({theme:{articleCard}}) => (articleCard.title)};
  font-size: 22px;
  text-align: left;
  transition: color 400ms;
  font-family: var(--main-font-medium);
  word-break: break-word;
  position: relative;
`;
 
const TitleUSA = styled(Title)`
  position: relative;
  
  &:after{
    content: ' ';
    top: 28px;
    left: 0;
    height: 3px;
    background: #CC1000;
    width: 65px;
    position: absolute;
  }
`;


const Summary = styled.p`
  flex: 1 1 auto;
  color: ${({theme:{articleCard}}) => (articleCard.summary)};
  font-family: var(--main-font-light);
  font-weight: 100;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  max-height: 40px;
  text-align: justify;
  padding-right: 16px;
  transition: all 400ms;

  &:before{
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after{
    content: '';
    position: absolute;
    right: 0;
    width: 16px;
    height: 26px;
    margin-top: 3.2px;
    background: ${({theme:{articleCard}}) => (articleCard.bg)};

  }
`;

const BreakingBanner = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  padding: 5px 10px;
  color: #f5f5f5;
  font-family: var(--main-font-light);
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  background: #FF9800;
  border-radius: 3px;
  letter-spacing: 1.6px;
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
    top: ${({isbreakingNews}) => isbreakingNews ? '-15px' : '0'};
    left: ${({isbreakingNews}) => isbreakingNews ? '-15px' : '0'};
    width: ${({isbreakingNews}) => isbreakingNews ? '70%' : '100%'};
    border-radius: ${({isbreakingNews}) => isbreakingNews ? 'var(--main-border-radius)' : '0 0 var(--main-border-radius) var(--main-border-radius)'};
  }
`;

const PublishAt = styled.p`
  padding-top: 10px;
  color: ${({theme:{articleCard}}) => (articleCard.publish)};
  font-family: var(--main-font-medium);
  font-size: 13px;
  transition: 400ms;
`;

const HierarchyOne = ({label, breakingNews, imageSrc, title, summary, author, time}) => {
  
  const renderTitleArticle = (title) => (
    SYSTEM === 'US' 
      ? <TitleUSA>{title}</TitleUSA> 
      : <Title>{title}</Title>
  );

  return (
    <React.Fragment>
      <ArticleHeader>
        <CoverImage imageSrc={imageSrc} isbreakingNews={breakingNews} />
        {
          label && <BreakingBanner>{label}</BreakingBanner>
        }
        { 
          breakingNews && <Banner isbreakingNews={breakingNews} >Último Momento</Banner>
        }
      </ArticleHeader>
      <ArticleContent>
        { renderTitleArticle(title) }
        <Summary>
          {summary}
        </Summary>
        
        <PublishAt>{strings().TIME.ago(time)}</PublishAt>
      </ArticleContent>
       
        {/* {author.type === 'author' ? (
          <Author
            name={author._id.name}
            slug={author._id.slug}
            image={author._id._id}
            time={time}
          />
        ) : (
          
        )} */}
    </React.Fragment>
  );
};

/* PropTypes */
HierarchyOne.propTypes = {
  breakingNews: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

HierarchyOne.defaultProps = {
  breakingNews: false
};

export default withTheme(HierarchyOne);
