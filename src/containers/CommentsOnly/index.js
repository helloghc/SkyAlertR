/* Libraries */
import React, { Component} from 'react';
import styled from 'styled-components';
import ArticleDetail from 'containers/ArticleDetail';
import strings from 'config/strings';

const Container = styled.div`
  max-width: 600px;
  display: block;
  margin: 0 auto;
`;


export default class CommentsOnly extends Component {
  constructor() {
    super();
    this.state = {
      shareUrl: false,
      slug: '',
    };
  }

  componentWillMount() {
    //console.log(window.location);
    const { news } = strings().ROUTE;

    const pathName = window.location.pathname;
    const origin = window.location.origin;
    const slug = window.location.href.match(/([^\/]*)\/*$/)[1];
    //console.log(pathName);
    //console.log(origin);
    //console.log(slug);
    const shareUrl = `${origin}/${news}/${slug}`;
    console.log(shareUrl);
    this.setState({ shareUrl, slug });

  }
  render() {
    return (
      <Container>
        <ArticleDetail
          articleId={this.state.slug}
          stripedContent={true}
        />
      </Container>

    );
  }
}
