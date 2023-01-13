import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GoogleAdsId = 'ca-pub-2638004817219461';

class GoogleAds extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit){
        clearTimeout(this.googleInit);
    }
  }

  render() {
    const { classNames, slot, responsive } = this.props;
    return (
      <div className={classNames}>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client={GoogleAdsId}
          data-ad-slot={slot}
          data-ad-format='auto'
          data-full-width-responsive={responsive}
        >
        </ins>
      </div>
    );
  }
}

GoogleAds.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
  responsive: PropTypes.arrayOf(['true','false'])
};

GoogleAds.defaultProps = {
  classNames: '',
  timeout: 200,
  responsive: 'true',
};

export default GoogleAds;