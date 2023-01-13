/* Libraries */
import React from 'react';
import Author from '../../models/author';
import SkyAlertAPI from '../../controllers/SkyAlertAPI';
import styled from 'styled-components';
import {device} from 'utils/media';
/* Components */
//import Article from 'components/Article';
import Container from 'containers/Bio/Container';
import H1 from 'components/H1';
import ArticleContainer from 'containers/ArticleDetail/ArticleContainer';
import ArticlesRelated from 'components/Article/ArticlesRelated';
//import ArticleContainer from './ArticleContainer';

const ContainerBio = styled.div`
  /* Display & Box Model */
  border-radius:1rem;
  @media ${device.laptop} {
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  /* Display & Box Model */
  margin-bottom: 2rem;
  @media ${device.laptop} {
    width: 15%;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 0;
  }
`;
const Picture = styled.div`
  /* Display & Box Model */
  display: inline-block;
  height: calc(43rem/4);
  margin: 0 auto;
  overflow: hidden;
  vertical-align: middle;
  width: calc(52.5rem/4);
  /* Other */
  transform-origin: 50% 50%;
  transform: rotate(90deg);
`;

const HexRotate = styled.div`
  /* Display & Box Model */
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
  /* Other */
  transform-origin: 50% 50%;
  transform: rotate(-60deg);
`;

const HexImage = styled.div`
  /* Display & Box Model */
  margin: 0 auto;
  overflow: hidden;
  width: 120%;
  height: 120%;
  /*Style*/
  background-image: url(${props => props.imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* Other */
  transform-origin: 52% 35%;
  transform: rotate(30deg);
`;

const Information = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  justify-content: center;
  @media ${device.laptop} {
    width: 85%;
    margin-left: 1rem;
    margin-right: 2rem;
    padding-top: 1.9rem;
  }
`;

const ContentBio = styled.div`
  /* Display & Box Model */
  display: flex;
  margin-bottom: 1rem;
  padding:1rem 2rem 0;
  flex-flow: column wrap;
  @media ${device.laptop} {
    padding: 0;
    flex-flow: inherit;
  }
`;
const Title = styled.h1`
  /* Style */
  color:  rgba(70, 70, 70, 1); /*Changed gray color*/
  /* Text */
  font-family: var(--main-font-bold);
  font-size: 2rem;
  margin-bottom: 0.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: uppercase;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const Summary = styled.p`
  /* Style */
  color: Black;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.6rem;
  letter-spacing: 0;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Header = styled.div`
  /* Display & Box Model */
  display: flex;
  a{
    text-decoration: none;
  }
  img{
    width: 27px;
    height: 27px;
    margin-left: 2rem;
  }
`;

const LATEST_QTY = 20;

const AuthorCard = (props) => (
<ContainerBio>
  <ContentBio>
    <ImageContainer>
      <Picture>
        <HexRotate>
          <HexRotate>
              <HexImage imageSrc={props.image}/>
          </HexRotate>
        </HexRotate>
      </Picture>
    </ImageContainer>
    <Information>
      <Header>
        <Title>
          {props.name}
        </Title>
        {
          props.twitter &&
          <a href={props.twitter} target="_blank">
            <img src="/images/twitter.png" alt=""/>
          </a>
        }
      </Header>
      <Summary>
        {props.bio}
      </Summary>
    </Information>
  </ContentBio>
</ContainerBio>
);

class AuthorProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: new Author({}),
      authorImg: '',
      relatedArticles: [],
      latest: [],
      authorId: '',
      bio: '',
      name: '',
      slug:'',
      twitter:false
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    //console.log('Props:');
    //console.log(this.props.match.params.authorSlug);
    // obtiene id autor
    try {
      const authorSlug = await SkyAlertAPI.init().getAuthor(this.props.match.params.authorSlug);
      this.setState({ authorId : authorSlug.author._id  });
    } catch (error) {
      console.error('Could not get details', error);
    }

    const author  = new Author({ id: this.state.authorId });

    try {
      const result = await author.getDetails();
      const authorImg = await author.getPic();
      console.log(result)
      // console.log(authorImg)
      if(result.socialMedia){
        this.setState({twitter: result.socialMedia.twitter})
      }
      this.setState({ bio: result.bio });
      this.setState({ name: result.name });
      this.setState({ slug: result.slug });
      this.setState({ authorImg: authorImg });

    } catch (error) {
      //console.error('Could not get details', error);
    }

    this.setState({ author });
    try {
      const latest = await author.getLatest(LATEST_QTY);
      this.setState({ latest });
      this.setState({ relatedArticles: latest });
    } catch (error) {
      //console.error('Could not get latest news', error);
      this.setState({ relatedArticles: [] });
      //console.log('latest:none')
    }
  }

  render() {
    //console.log(this.state.name)
    //console.log(this.state.bio)
    //console.log(this.state.authorImg)
    return (
      <Container>
      <ArticleContainer>
        <AuthorCard
          name={this.state.name}
          bio={this.state.bio}
          slug={this.state.slug}
          image={this.state.authorImg}
          twitter={this.state.twitter}
        />
      </ArticleContainer>
        <H1>NOTICIAS PUBLICADAS</H1>
        {this.state.relatedArticles &&
          <ArticleContainer>

            <ArticlesRelated
              articles={this.state.relatedArticles}
            />

          </ArticleContainer>
        }
      </Container>
    );
  }
}

export default AuthorProfile;
