/* Libraries */
import React from 'react';
/* Components */
import Header from 'components/Header';
import Article from 'components/Article';

import FeedController from '../../controllers/Feed';
import SkyAlertAPI from '../../controllers/SkyAlertAPI';

import LeftColumn from '../Feed/LeftColumn';
import RightColumn from '../Feed/RightColumn';
import FullColumn from '../Feed/FullColumn';
import Loader from 'components/Loader';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      leftSideArticles: [],
      rightSideArticles: [],

      emptyNews: false,
      isLoading: true,
      isLoadingMore: false,

      results: false,
      resultsCurrentPage: false,
      noResults: false,
      // searchValue: this.props.searchText
    };
    FeedController.init(this._reload.bind(this));
    FeedController.init().onReload = this._reload.bind(this);
    this.reload = this._reload.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({ isLoadingMore: true })
    window.addEventListener('scroll', this.onScroll, false);
    this._reload();
  }

  _reload() {
    FeedController.init().reload()
      .then(data => {
        console.log(data);
        const articles = data.feed;
        this.arrangeArticles(articles);
        this.setState({ isLoadingMore: false })
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoadingMore: false });
      });
  }


  onPaginatedSearch = (e) => {
    this.setState({ isLoadingMore: true });
    FeedController.init().getNextPage()
      .then(data => {
        const articles = data.feed;
        this.arrangeArticles(articles);
      })
      .catch(error => {
        console.log(error.message);
        var str = error.message;
        if (str === 'No more articles to display') {
          console.log("OH NO ya no hay articulos :(");
          this.setState({ emptyNews: true });
        }
        this.setState({ isLoadingMore: false });
      });
  }

  getNextPageResults() {

    this.resultsCurrentPage += 1;
    this.setState({ isLoadingMore: true });
    SkyAlertAPI.init().getArticles(this.resultsCurrentPage, 32, this.state.searchValue).then(data => {
      console.log(data);

      if (!data.data.articles.length) {
        console.log("No more articles");
        this.resultsCurrentPage = this.resultsCurrentPage - 1;
        this.setState({ isLoadingMore: false });
      }
      else {
        const articles = this.state.articles;
        articles.push(...data.data.articles);
        this.arrangeArticles(articles, false, true, this.state.queryValue);
      }
    })
  }
  arrangeArticles(
    articles,
    noResults = false,
    results = false,
    queryValue = '') {
    const leftSideArticles = articles.filter(side => {
      return side.side === 'left' || side.side === null;
    })
    const rightSideArticles = articles.filter(side => {
      return side.side === 'right';
    })
    console.log(leftSideArticles);
    console.log(rightSideArticles);
    this.setState({
      articles: articles,
      isLoading: false,
      isLoadingMore: false,
      leftSideArticles: leftSideArticles,
      noResults: noResults,
      results: results,
      rightSideArticles: rightSideArticles,
      searchValue: queryValue,
    });
  }
  render() {
    return (
      <div>
      {this.state.isLoadingMore ? (
        <Loader />
      ) : (
        <div>
          <Header title="News" />
          <LeftColumn>
            <Article
              articles={this.state.leftSideArticles}
            />
          </LeftColumn>
          <RightColumn>
            <Article
              articles={this.state.rightSideArticles}
            />
          </RightColumn>
          <FullColumn>
            <Article
              articles={this.state.articles}
            />
          </FullColumn>
        </div>
       )}
      </div>
    );
  }
}


export default News;
