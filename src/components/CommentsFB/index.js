/* Libraries */
import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  display: block;
  margin: 0 auto;
`;

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;

const LOCALE = SYSTEM === 'US' ? 'en_US': 'es_LA';

export default class CommentsFB extends Component {

  render() {
    return (
      <Container>
        <FacebookProvider appId="881811818644187"  language={LOCALE}>
          <Comments href={this.props.url} width="100%" />
        </FacebookProvider>
      </Container>

    );
  }
}
