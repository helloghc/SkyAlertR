/* Libraries */
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import MediaImage from '../../models/image';
import SocialMedia from '../../models/SocialMedia';
import Masonry from 'react-masonry-css'
/* Utils */
import {device} from 'utils/media';
import strings  from 'config/strings';
/* Components */
import ArticleContainer from './ArticleContainer';
import HierarchyOne from './HierarchyOne';
import HierarchyOneBR from './HierarchyOneBR';
import HierarchyTwo from './HierarchyTwo';
import HierarchyThree from './HierarchyThree';
import HierarchyFour from './HierarchyFour';
import Video from './Video';
/*import SponsoredContent from './SponsoredContent';
import Opinion from './Opinion';*/
import 'moment/locale/es';

const StyledNavLink = styled(NavLink)`
  /* Text */
  text-decoration: none;
`;

const breakpointColumnsObj = {
  default: 2,
  500: 1
};

const maybePluralize = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;

function humanReadableDifference(date) {
  const now = moment(new Date());
  const duration = moment.duration(now.diff(moment(date)));
  const minutes = duration.asMinutes();
  const hours = duration.asHours();

  if (minutes < 60) return `${parseInt(minutes, 10)} min`;
  if (hours < 24) return `${parseInt(hours, 10)} hrs`;

  return maybePluralize(parseInt(duration.asDays(), 10) , 'día');
}

const formatDate = (date) => {
  return moment(date).format('DD[-]MMMM[-]YYYY');
}

const calcPercentage = (globalCount, count) => {
  if(count > 0){
    return (( count * 100 ) / globalCount).toFixed(1);
  }
  return count
}

const ArticlesRelated = ({ articles }) => {
  const { news } = strings().ROUTE;

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {
        articles.map((article) => {
          const articleBase = (<ArticleContainer>
            {(() => {
              const time = humanReadableDifference(article.publishAt)

              if (article.mainMedia && article.mainMedia.type === 'Image') {

                const media = new MediaImage(article.mainMedia.document);

                switch (article.display) {
                case '0':
                  return  (<HierarchyOne
                    imageSrc={media.getPic()}
                    title={article.title}
                    summary={article.summary}
                    time={time}
                    label={article.label}
                    author={article.author}
                    has3d={article.has3d}
                    breakingNews={article.isBreaking}
                    color={article.headerColor}
                  />);
                case '1':
                  return  (<HierarchyTwo
                    imageSrc={media.getPic()}
                    title={article.title}
                    summary={article.summary}
                    time={time}
                    author={article.author}
                  />);
                case '2':
                  return  (<HierarchyThree
                    title={article.title}
                    summary={article.summary}
                    time={time}
                    author={article.author}
                  />);
                case '3':
                  return  (<HierarchyFour
                    title={article.title}
                    time={time}
                    author={article.author}
                  />);
                case '4':
                  return  (<HierarchyOne
                    imageSrc={media.getPic()}
                    title={article.title}
                    summary={article.summary}
                    time={time}
                    author={article.author}
                  />);
                case '5':
                  return  (<HierarchyOneBR
                    imageSrc={media.getPic()}
                    title={article.title}
                    summary={article.summary}
                    time={time}
                    author={article.author}
                  />);
                case '7':
                  return  (<HierarchyOne
                    imageSrc={media.getPic()}
                    title={article.title}
                    summary={article.summary}
                    time={time}
                    label={article.label}
                    author={article.author}
                    has3d={article.has3d}
                    breakingNews={article.isBreaking}
                    color={article.headerColor}
                    tall
                  />);
                default:
                  return  (<HierarchyFour
                    title={article.title}
                    time={time}
                    author={article.author}
                  />);
                }
              } else if (!article.mainMedia) {
                switch (article.display) {
                case '2':
                  return  (<HierarchyThree
                    title={article.title}
                    summary={article.summary}
                    time={time}
                    author={article.author}
                  />);
                case '3':
                  return  (<HierarchyFour
                    title={article.title}
                    time={time}
                    author={article.author}
                  />);
                default:
                  return  (<HierarchyFour
                    title={article.title}
                    time={time}
                    author={article.author}
                  />);
                }
              }
              else if (article.mainMedia && article.mainMedia.type === 'SocialMedia') {
                const media = new SocialMedia(article.mainMedia.document);
                const iframe = media.getYouTubeEmbed('100%', '215');
                //console.log(article);
                //console.log(article.mainMedia.document);
                //console.log(media);
                //console.log(iframe);
                return  (<Video
                  title={article.title}
                  iframe={iframe}
                  time={time}
                  slug={article.slug}
                />);
              } else {
                return  (<HierarchyFour
                  title={article.title}
                  time={time}
                  author={article.author}
                />);
              }
            })()}
            </ArticleContainer>);

          if( article.mainMedia && article.mainMedia.type === 'SocialMedia'  ){
            return articleBase;
          }else{
            return (<StyledNavLink to={ `/${news}/${article.slug}`} key={article._id}>

                {
                  articleBase
                }
              </StyledNavLink>
            )
          }
        })
      }
    </Masonry>
  );
};

export default ArticlesRelated;
