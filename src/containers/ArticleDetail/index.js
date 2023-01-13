
/* Libraries */
import React from 'react';
import { withRouter } from 'react-router-dom';
import SkyAlertAPI from '../../controllers/SkyAlertAPI';
import SkeletonArticle from '../../components/Placeholder/Article';
import Container from './Container';
import ArticleContent from 'components/ArticleContent';
import { ArticleWrapper } from './Styles';


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: '',
      relatedArticles: [],
      isLoading:false,
      isLoadingArticleRelated:false,
      isFirstLoadingArticlesRelated: true,
    };
  }

  resetScrollPage(){
    window.scrollTo(0, 0);
  }

  async componentDidMount() {
    const { match, articleId } = this.props;
    this.resetScrollPage();
    const propArticleId = match ? match.params.articleId : articleId;
    this.setState({ 
      articleId: propArticleId,
    });

    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match && this.props.match) {
      if (nextProps.match.params.articleId !== this.props.match.params.articleId) {
        this.resetScrollPage();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  getHeightArticleById(id){
    const elementArticle = document.getElementById(id);
    if(elementArticle){
      return elementArticle.clientHeight;
    }

    return undefined;
  }

  onScroll = () => {
    const { articleId, isFirstLoadingArticlesRelated, isLoadingArticleRelated } = this.state;
    if(isFirstLoadingArticlesRelated && !isLoadingArticleRelated ) {
      const positionScroll = window.innerHeight + document.documentElement.scrollTop;
      const heightArticle = this.getHeightArticleById(`articleId-${articleId}`);
      if(positionScroll > heightArticle){
        this.loadRelatedArticles(articleId);
      }
    }
  }

  async getRequestArticleRelated(articleId) {
    let response = [];
    this.setState({ isLoadingArticleRelated: true });
    try{
      const {articles} = await SkyAlertAPI.init().getArticleRelated(articleId);
      response = articles.filter(article => article);
    }catch(e){
      console.error(`Can't get articles related for id ${articleId} ->`, e);
    }finally{
      this.setState({ isLoadingArticleRelated: false });
    }

    return response;
  }

  async loadRelatedArticles(articleId){
    const relatedArticles = await this.getRequestArticleRelated(articleId);
    this.setState({ relatedArticles, isFirstLoadingArticlesRelated: false });
  };

  render() {
    const {articleId, relatedArticles} = this.state;
    const {stripedContent} = this.props;
    const style = stripedContent ? { marginTop: 0 } : {};
    return (
      <Container style={style}>
          <ArticleWrapper>
            { articleId ? 
              <ArticleContent
                articleId={articleId}
                stripedContent={stripedContent} 
              /> : 
              <SkeletonArticle />
            }
            { relatedArticles &&
              <React.Fragment>
                { relatedArticles.map((article, index) =>{
                    return(
                      <ArticleContent
                        key={index}
                        articleId={article._id}
                        last={relatedArticles.length - 1 === index ? true : false}
                        stripedContent={this.props.stripedContent}
                      />
                    )
                  })
                }
              </React.Fragment>
            }
          </ArticleWrapper>
      </Container>
    );
  }
}

export default withRouter(ArticleDetail);
