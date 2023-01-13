
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';
import ReactGA from 'react-ga';
import SkyAlertAPI from '../../controllers/SkyAlertAPI';
import SocialMedia from '../../models/SocialMedia';
import Author from './Author';
import ImageBg from './ImageBg';
import HR from './HR';
import Title from './Title';
import TweetShare from './TweetShare';
import ShareFB from '../ShareFB';
import CommentsFB from '../CommentsFB';
import ContentParse from './ContentParse';
import HelmetHeader from './HelmetHeader';
import SkeletonArticle from '../Placeholder/Article';
import strings from '../../config/strings';
import { formatUriImage } from '../../helpers';
import * as Styles from './Styles';

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;
const LOCALE_MOMENT = process.env.REACT_APP_LANGUAGE || 'es';
const DISPLAY_CONTENT_HIERARCHY_8 = '8';

class ArticleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      bgImage: false,
      bgVideo:false,
      isLoading: true,
    };
  }

  componentDidMount() {
    const { articleId } = this.props;
    moment.locale(LOCALE_MOMENT);
    this.sendInitialInformationGA();
    this.getArticleDetail(articleId);
  }

  sendInitialInformationGA(){
    const pageView = window.location.pathname.replace('mobile-post', 'noticias');
    ReactGA.pageview(pageView);
    ReactGA.set({pageView});
  }

  async getRequestArticle(articleId) {
    let response = null;
    try{
      const { article } = await SkyAlertAPI.init().getArticle(articleId);
      response = article
    }catch(e){
      console.error(`Can't get article for id ${articleId} ->`, e);
    }

    return response;
  }

  async getArticleDetail(articleId){
    const { history } = this.props;
    const article = await this.getRequestArticle(articleId);
    if(!article && history){
      history.push('/404');
      return;
    }

    const { bgImage, bgVideo } = this.getArticleMediaBg(article);

    this.setState({
      article,
      isLoading: false,
      bgImage,
      bgVideo,
    })
  }

  getArticleMediaBg({ headMedia = '', media = [], mainMedia = {} }){
    let bgImage = '';
    let bgVideo = '';

    const mainMediaDocument = mainMedia.hasOwnProperty('document') ? mainMedia.document: '';
    const idMedia = headMedia || mainMediaDocument;

    const dataMedia = media.filter(object => object.document._id === idMedia);
    if(dataMedia.length){
      if (dataMedia[0].type === 'Image') {
        const isSameMedia = idMedia === headMedia;
        const imageUrl = isSameMedia ? dataMedia[0].document._id : mainMedia.document;
        const defaultPathImg = isSameMedia ? '' : '/images/background-article.jpg';
        bgImage = formatUriImage(imageUrl , defaultPathImg);
      }
  
      if (dataMedia[0].type === 'SocialMedia') {
        bgVideo = generateIframeVideoMedia(idMedia);
      }
    }

    const generateIframeVideoMedia = (idDocument) => {
      const media = new SocialMedia(idDocument);
      const iframe = media.getYouTubeEmbed('100%', '470px');
      return iframe;
    };

    return {
      bgImage,
      bgVideo,
    }
  }

  formatShareUrl(slug) {
    if(!slug){
      return '';
    }
    const { news } = strings().ROUTE;
    return `${window.location.origin}/${news}/${slug}`;
  }

  formatDateCountry(date) {
    const formatCountry = SYSTEM === 'US' ? 'DD MMMM YYYY' : 'DD [de] MMMM [de] YYYY'
    return moment(date).format(formatCountry);
  }

  analyticsEvents = (action, label) => {
    ReactGA.event({ category: 'News', action, label })
  }

  renderTitle() {
    const { article: { altTitle, title}} = this.state;
    return <Title>{altTitle || title}</Title>;
  }

  renderBgImage(){
    const { bgImage, article } = this.state;
    const isDisplayContentHierarchy8 = article.display === DISPLAY_CONTENT_HIERARCHY_8;
    return (
      <ImageBg imageSrc={bgImage}>
        { isDisplayContentHierarchy8 ? this.renderTitle() : <React.Fragment />}
      </ImageBg>
    )
  }

  renderBgVideo(){
    const { bgVideo } = this.state;
    if(!bgVideo){
      return <React.Fragment />
    }
    return (
      <div 
        style={{marginBottom: 20}} 
        className="videoHeader" 
        dangerouslySetInnerHTML={{ __html: bgVideo }} 
      />
    )
  }

  renderPublish(){
    const { publishAt, article } = this.state;
    const { stripedContent } = this.props;
    const isAuthor = article.author && article.author.type === 'author' ;
    if(!isAuthor){
      return <React.Fragment />
    }

    const linkToAuthor = stripedContent && isAuthor ? `http://author/${article.author._id._id}` : `/autor/${article.author._id.slug}`;
    return (
      <React.Fragment>
        <Styles.PublishAt>{publishAt}</Styles.PublishAt>
        <ContentAuthor isStriped={stripedContent} url={linkToAuthor}>
          <Author
            name={article.author._id.name}
            slug={article.author._id.slug}
            image={article.author._id.pic.filename}
          />
        </ContentAuthor>
      </React.Fragment>
    );
  }

  render() {
    const { last, articleId} = this.props;
    const { article, bgImage, isLoading } = this.state;
    
    if(isLoading){
      return (
        <SkeletonArticle />
      )
    }

    const isDisplayArticleContent = article.display !== DISPLAY_CONTENT_HIERARCHY_8;
    const shareUrl = this.formatShareUrl(article.slug);

    return (   
      <div id={`articleId-${articleId}`}>
        <HelmetHeader 
          shareUrl={shareUrl} 
          title={article.title} 
          summary={article.summary}
          bgImage={bgImage} 
        />
        { isDisplayArticleContent ? 
          <Styles.Container>
              <div>
                {this.renderBgImage()}
                {this.renderBgVideo()}
                <Styles.Content>
                  { this.renderTitle() }
                  { this.renderPublish() }
                  <Styles.BodyContent>
                    <ContentParse content={article.content} media={article.media} />
                  </Styles.BodyContent>
                  { article.source ? 
                    <Styles.Source>{article.source && `${strings().ARTICLE.content.source} ${article.source}`}</Styles.Source> 
                    : <React.Fragment /> 
                  }
                  <Styles.SocialContainer>
                    <ShareFB url={shareUrl} onPress={()=>this.analyticsEvents('Share by facebook', `Share facebook - ${article.title}`)} />
                    <TweetShare url={shareUrl} text={article.title} onPress={()=>this.analyticsEvents('Share by twitter', `Share twitter - ${article.title}`)} />
                  </Styles.SocialContainer>
                  { shareUrl ? 
                    <CommentsFB url={shareUrl} /> 
                    : <React.Fragment /> 
                  }
                </Styles.Content>
                <HR last={last} />
              </div>
          </Styles.Container>
          : <div />
        }
      </div>
    );
  }
}

const ContentAuthor = ({children, isStriped, url}) => {
  if(!isStriped) {
    return <NavLink strict to={url}> {children} </NavLink>
  };

  return <a href={url}>{children} </a>
}

export default withRouter(ArticleContent);
