import React from 'react';
import ReactGA from 'react-ga';
import Showdown from 'showdown';
import InstagramEmbed from 'react-instagram-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ModelSocialMedia from '../../models/SocialMedia';
import FacebookContainer from './FacebookContainer';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import InstagramContainer from './InstagramContainer';
import { formatUriImage, getIframeURL } from '../../helpers';

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;
const CUSTOM_FORMAT_CONTENT = '_ZZZ_$2|$3|$1_ZZZ_';
const SEPARATOR_INFO = '_ZZZ_';
const LOCALE_FB = SYSTEM === 'US' ? 'en_US': 'es_LA';
const APP_ID_FB = '881811818644187';

const ContentParse = ({content = '', media = null}) => {
    const parseTypeElementContent = (mdContent) => {
        let typeContent = { type: 'text', content: mdContent };
        const infoData = mdContent.split('|');
        if(infoData.length === 3){
            typeContent = { type: infoData[0], content: infoData };
        }
        return typeContent;
      };
    
    const parseMDtoHtml = (content) => {
        if(!content){
            return content;
        }
        return new Showdown.Converter().makeHtml(content);
    }

    const renderTypesElement = ({type, content}, index) => {
        if(type === 'socialmedia') {
            return <SocialMedia key={`Sm-${index.toString()}`} media={media} />
        }else if(type === 'image'){
            return (
                <Image 
                    key={`Img-${index.toString()}`} 
                    pathUrl={content[1]} 
                />
            );
        }else{
            return (
                <Text 
                    key={`Txt-${index.toString()}`} 
                    innerHtml={parseMDtoHtml(content)} 
                />
            );
        }
    }

    const regex = /\[([^\]]+)\]\(\$([^:]+):([^)]+)\)/g;
    const parsedInfoContent = content.replace(regex, CUSTOM_FORMAT_CONTENT);
    const elementsContent = parsedInfoContent.split(SEPARATOR_INFO).map(parseTypeElementContent);
    return (
        <React.Fragment>
            {elementsContent.map(renderTypesElement)}
        </React.Fragment>
    )
};


const Text = ({ innerHtml = '' }) => (
    <p dangerouslySetInnerHTML={{ __html: innerHtml }} />
);

const Image = ({ pathUrl = '' }) => (
    <img width='100%' src={formatUriImage(pathUrl)} />
);

const SocialMedia = ({media = null, idContent = ''}) => {
    if(!media || !media.hasOwnProperty('document') || !idContent){
        return (<div />);
    }

    const analyticsEvents = (action, label) => {
        ReactGA.event({
          category: 'News',
          action,
          label,
        })
    }

    const mediaRaw = media.find(obj => obj.document._id === idContent);
    const modelMedia = new ModelSocialMedia(mediaRaw.document || mediaRaw);
    switch (modelMedia.network) {
        case 'youtube': {
            try {
                return (
                    <div 
                        className='youtubeVideo' 
                        dangerouslySetInnerHTML={{ __html: modelMedia.getYouTubeEmbed('100%') }} 
                        onClick={()=> analyticsEvents('Click element youtube on news', 'Play element video in youtube')}
                    />
                );
            } catch (e) {
                console.error('Could not render youtube iframe ', e);
                return (<div />);
            }
        }
        case 'soundcloud': {
          try {
            return (
                <div 
                    dangerouslySetInnerHTML={{ __html: getIframeURL(modelMedia.url) }} 
                    onClick={()=> analyticsEvents('Click element soundcloud on news', 'Play element sound in soundcloud')}
                />
            );
          } catch (e) {
            console.error('Could not render soundcloud iframe ', e);
            return (<div />);
          }
        }
        case 'twitter': {
          try {
            return (
                <div onClick={()=>this.analyticsEvents('Click element tweet on news ', 'Click element embed on twitter')}>
                    <TwitterTweetEmbed tweetId={modelMedia.getTwitterId()} />
                </div>
                );
          } catch (e) {
            console.error('Could not render twitter embed ', e);
            return (<div />);
          }
        }
        case 'instagram': {
          try {
            return (
              <InstagramContainer onClick={()=>this.analyticsEvents('Click element instagram on news ', 'Click element embed in instagram')}>
                <InstagramEmbed url={modelMedia.url} maxWidth={500} />
              </InstagramContainer>
            );
          } catch (e) {
            console.error('Could not render instagram embed ', e);
            return (<div />);
          }
        }
        case 'facebook': {
          try {
            return (
              <div
                style={{ marginBottom: 20 }}
                onClick={()=>this.analyticsEvents('Click element facebook on news ', 'Click element embed in facebook')}>
                <FacebookContainer>
                  <FacebookProvider appId={APP_ID_FB}  language={LOCALE_FB}>
                    <EmbeddedPost href={modelMedia.url} width='auto' />
                  </FacebookProvider>
                </FacebookContainer>
              </div>
            );
          } catch (e) {
            return (<div />);
          }
        }
        default:
          return (<div />);
        }
}

export default ContentParse;
