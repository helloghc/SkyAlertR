/* Libraries */
import React, { Component } from 'react';
import styled from 'styled-components';
import {device} from 'utils/media';
import FeedController from '../../controllers/Feed';


const BannerFull = styled.div`
  background: #ff0000;

  color: White;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  z-index: 999;
  text-align: center;
  font-family: var(--main-font-medium);
  font-size: 1.5rem;
  padding: 1.5rem;
  padding-top: 2rem;
  b{
    font-size:1.5rem;
    font-weight:bold;
  }
  @media ${device.mobileL} {
    top: 75px;
    font-size: 1.3rem;
  }
  @media ${device.laptop} {
    top: 55px;
    background-image: url(/images/arrow-top.png);
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 1.7rem;
    padding-top: 1.5rem;
    b{
      font-size:1.7rem;
      font-weight:bold;
    }
  }
`;


class BreakingNewsBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerFull:false,
    };
  }

  componentDidMount() {
    FeedController.init().reload()
    .then(data => {
      //console.log(data);
      const articles = data.feed;
      const bannerArticles = articles.filter(article => {
        return article.display === "8";
      })
      if(bannerArticles.length){
        const bannerArticle = bannerArticles[0];
        this.setState({bannerFull:bannerArticle})
        //this.setState({isTopNav:true});
        this.props.handleTopBanner();
      }
      else{
        //this.setState({isTopNav:false})
      }
    })
    .catch(error => {
      //console.log(error);
    });
  }

  render() {
    return (
      <div>
        {
          this.state.bannerFull &&
          <a href={this.state.bannerFull.summary} target="_blank">
            <BannerFull><b>ÚLTIMO MOMENTO:</b> {this.state.bannerFull.title}. <br/><u>Ver más</u></BannerFull>
            
          </a>
        }
      </div>
    )
  }
}

export default BreakingNewsBanner;
