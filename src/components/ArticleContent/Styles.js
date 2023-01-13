import styled from 'styled-components';
import {device} from 'utils/media';

export const Container = styled.div `
  padding: 0rem;
  padding-top: 0;

  .videoHeader{
    margin: 0 -3rem 2rem -3rem;
    iframe{
      height: 22rem !important
    }
  }
  @media ${device.laptop} {
    padding: 0;

    .videoHeader{
      margin:0 0 2rem 0;
      iframe{
        height: 450px!important
      }
    }
  }
`;

export const BodyContent = styled.div`
  & iframe{
    width: 100%;
    margin: auto;
    display: block;
  }

  .youtubeVideo{
    iframe{
      margin: 1rem 0rem 2rem 0rem !important;
      height: 16rem;
    }
  }
  iframe.instagram-media {
    margin: 2rem 0rem 2rem 0rem !important;
  }
  twitterwidget{
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }
  strong{
    font-size:inherit !important;
  }
  margin-bottom: 2rem;
  a{
    /* Text */
    text-decoration: none;
    word-break: break-all;
  }
  h1{
    /* Style */
    color: ${({theme:{articleContent}}) => (articleContent.tex)};
    /* Text */
    font-family: var(--main-font-bold);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  h2{
    /* Style */
    color: ${({theme:{articleContent}}) => (articleContent.text)};
    /* Text */
    font-family: var(--main-font-bold);
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  h3{
    /* Style */
    color: ${({theme:{articleContent}}) => (articleContent.text)};
    /* Text */
    font-family: var(--main-font-bold);
    font-size: 2rem;
    margin-bottom: 10px;
  }
  p{
    /* Style */
    color: ${({theme:{articleContent}}) => (articleContent.text)};
    /* Text */
    font-family: var(--main-font-light);
    font-size: 1.8rem;
    margin: .5rem;
    text-align: left;
    letter-spacing: 0;
  }
  em{
    /* Style */
    color: ${({theme:{articleContent}}) => (articleContent.text)};
    /* Text */
    font-family: var(--main-font-light);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: left;
    letter-spacing: 0;
    font-style:oblique;
  }
  strong{
    /*Text*/
    font-family: var(--main-font-bold);
    font-size: 1.8rem;
    letter-spacing: 0;
  }
  ol{
    padding-left: 2rem;
    // list-style:circle;
  }
  ul{
    padding-left: 2rem;
    list-style:unset;
  }
  li{
    /* Style */
    color: ${({theme:{articleContent}}) => (articleContent.text)};
    /* Text */
    font-family: var(--main-font-light);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    letter-spacing: 0;
  }
  img{
    display:block;
    width: 60%;
    margin: 2rem auto;
  }
  blockquote{
    margin: 15px 20px;
    padding: 7px 19px;
    padding-bottom: 10px;
    padding-top: 12px;
    border-left: 5px solid gray;
    p{
      font-size: 1.8rem;
    }
  }
  @media ${device.mobileL} {
    .youtubeVideo{
      iframe{
        height: 19rem;
      }
    }

  }
  @media ${device.laptop} {
    blockquote{
      margin: 15px 50px;
      padding: 7px 19px;
      padding-bottom: 10px;
      padding-top: 12px;
      p{
            font-size: 3rem;
      }
    }
    .youtubeVideo{
      iframe{
        height: 35rem;
      }
    }  
  }
`;

export const Source = styled.p `
  /* Style */
  color: Black;
  font-family: var(--main-font-light);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: left;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  font-style: italic;

`;

export const SocialContainer = styled.div `
/* Style */
position: relative;
display: inline-flex;

@media ${device.laptop} {
  display: block;
  position: absolute;
  top: 0;
  left: -20px;
  button{
    margin-top: 9px !important;
  }
  a{
    margin-top: 4px !important;
  }
}
`;

export const Content = styled.div`
  position: relative;
  margin: 2rem;
  @media ${device.laptop} {
    padding-left: 4rem;
  }
`;

export const PublishAt = styled.p`
/* Display & Box Model */
margin-bottom: 2rem;
/* Style */
color: ${({theme:{articleContent}}) => (articleContent.date)};
/* Text */
font-family: var(--main-font-medium);
font-size: 1.6rem;
`;