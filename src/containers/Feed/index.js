import React, { Component } from 'react';
import styled, { withTheme, keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';
import times from 'lodash/times';
import ReactGA from 'react-ga';
import FeedController from '../../controllers/Feed';
import MediaImage from '../../models/image';
import { device } from 'utils/media';
import strings from 'config/strings';
import Grid from './Grid';
import BlockStyled from 'components/Buttons/Block'
import SkeletonFeed from 'components/Placeholder/Feed';
import Article from 'components/Article';
import HierarchyOneFull from 'components/Article/HierarchyOneFull';

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const ArticleContainer = styled.div`
  margin-bottom: 2rem;
  padding: 0 2rem;
  @media ${device.laptop} {
    margin-bottom: 3rem;
  }
`;

const ContainerFeed = styled.div`
  margin: auto;
`;

const TitlePost = styled.h1`
  font-size: 28px;
  color: ${({theme:{feed}}) => (feed.title)};
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  transition: color 400ms;
  text-align:center;
  margin: 0 -30px 30px -30px;
  padding: 15px;
  

  @media ${device.mobileCustom} {
    font-size: 32px;
  }

  @media ${device.laptop} {
    font-size: 38px;
    justify-content: flex-start; 
    padding: 3.7rem 0;
    padding-left: 30px;
    margin: -30px;
    margin-bottom: 0px;
  }
`;

const TitlePostUSA = styled(TitlePost)`  
  position: relative;
  background: ${({theme}) => (theme.primary)};
  width: 85vw;
  color: #FFFFFF;
  justify-content: flex-start;
  padding: 15px 15px 15px 30px;
  margin: 0 -30px 30px -30px;
  height: auto;

  &:after{
    content: '';
    flex: none;
    position: absolute;
    right: -1px;
    bottom: -1px;
    border-top: 80px solid transparent;
    border-right: ${({theme:{background}}) => (`20px solid ${background}`)};
    transition: border 400ms;
  }

  @media ${device.mobileCustom} {
    width: 85vw;
  }

  @media ${device.mobileXL} {
    width: 325px;
  }

  @media ${device.laptopS} {
    width: 380px;
  }
  
`;

const LoadMoreButton = styled(BlockStyled)`
  position: relative;
  z-index: 1;
  margin: 0 auto 2em;
  width: 270px;

  &.load:hover, &.load:active{
    box-shadow: none;
  }

  &.load:after{
    content: '';
    box-sizing: border-box;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #545454;
    border-bottom-color: #545454;
    transform-origin: center;
    animation: ${spinner} 650ms infinite;
  }

  @media ${device.laptop} {
    width: 32%;
    margin: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
`;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      articles: [],
      fullArticle:false,
      isLoadingMore: false,
      results: true,
    };
  }

  async componentDidMount() {
    ReactGA.set({page: 'home'});
    await this._reload();
  }

  async _reload() {
    this.setState((state)=>({isLoading: !state.isLoading}));
    try{      
      const feedResponse =  await FeedController.init().reload();
      const articles = feedResponse.feed;
      this.arrangeArticles(articles);
    }catch(error){
      this.setState({results: false});
      console.error(error, 'Articles not display');
    }

    this.setState((state)=>({isLoading: !state.isLoading}));
  }

  async _getNextArticles() {
    this.setState((state)=>({isLoadingMore: !state.isLoadingMore}));
    try{      
      const feedResponse =  await FeedController.init().getNextPage();
      const articles = feedResponse.feed;
      this.arrangeArticles(articles);
    }catch(error){
      this.setState({results: false});
      console.error(error, 'Articles not display');
    }

    this.setState((state)=>({isLoadingMore: !state.isLoadingMore}));
  }

  arrangeArticles( articles, noResults=false, results=false){
    let fullArticle = false;
    let allArticles = false;

    //TODO: FILTER DISPLAY === 6 ?
    let fullColumnArticles = articles.filter(({display}) => (display === '6'));

    if(fullColumnArticles.length){
      console.log(fullColumnArticles,' fullColumns');
      fullArticle = fullColumnArticles[0];
      fullArticle.mediaImage = new MediaImage(fullArticle.mainMedia.document);
      //console.log(fullArticle);
    }

    //TODO: FILTER DISPLAY !== 8 ?
    const firstFilterArticles = articles.filter(article => {
      return article.display !== '8';
    })
    
    if (fullArticle){
      allArticles = firstFilterArticles.filter(article => {
        return article._id !== fullArticle._id;
      })
    }
    else{
      allArticles = firstFilterArticles;
    }

    this.setState({
      articles:allArticles,
      fullArticle: fullArticle,
    });
  }

  getMoreArticles = (e) =>{
    e.preventDefault();

    ReactGA.event({
      category: 'News',
      action: 'Load button',
      label: `Click in load news`
    });

    setTimeout(()=>{
      this._getNextArticles();
    }, 500);
  }

  renderTitleFeed = ( title = '') => (
    SYSTEM === 'US' 
      ? <TitlePostUSA>{title}</TitlePostUSA> 
      : <TitlePost>{title}</TitlePost>
  )

  renderPlaceHolderFeed = () =>{
    return times(30, (i)=>(
      <SkeletonFeed 
        key={i} 
        width={475} 
        height={505} 
        />
    ));
  }

  render() {
    const { titlePosts } = strings().FEED;
    const { news } = strings().ROUTE;
    
    const { isLoading, isLoadingMore, results, articles, fullArticle } = this.state;
    const { 
      slug,
      title,
      mediaImage, 
      summary, 
      publishAt, 
      label, 
      author, 
      has3d, 
      isBreaking, 
      headerColor
    } = fullArticle;
    
    if(isLoading){
      return (
        <ContainerFeed>
          <Grid>
            { this.renderPlaceHolderFeed() }
          </Grid>
        </ContainerFeed>
      );
    }

    return (
      <ContainerFeed>
        { this.renderTitleFeed(titlePosts)}
        <Grid>
          <Article articles={articles} />
          { fullArticle &&
            <StyledNavLink 
              to={ `/${news}/${slug}`} 
              onClick={()=>
                ReactGA.event({
                  category: 'News',
                  action: `Open news`,
                  label: `Click news ${slug}`
                })
              }>
              <ArticleContainer>
                <HierarchyOneFull
                  imageSrc={mediaImage.getPic()}
                  title={title}
                  summary={summary}
                  time={publishAt}
                  label={label}
                  author={author}
                  has3d={has3d}
                  breakingNews={isBreaking}
                  color={headerColor}
                />
              </ArticleContainer>
            </StyledNavLink>
          }
        </Grid>
        {
          results && <LoadMoreButton
            onClick={this.getMoreArticles} 
            className={ isLoadingMore && 'load'}
            disabled={ isLoadingMore }>
            {
              `${isLoadingMore ? '' : strings().FEED.moreResults}`
            }
          </LoadMoreButton>
        }     
      </ContainerFeed>
    );
  }
}


export default withTheme(Feed);
