/* Libraries */
import React, { Component} from 'react';
import FacebookProvider, { ShareButton } from 'react-facebook';

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;

const LOCALE = SYSTEM === 'US' ? 'en_US': 'es_LA';

export default class ShareFB extends Component {
  render() {
    return (
      <div onClick={this.props.onPress}>
        <FacebookProvider appId="881811818644187"  language={LOCALE}>
          <ShareButton className="facebookButton" href={this.props.url} />
        </FacebookProvider>
      </div>
    );
  }
}
