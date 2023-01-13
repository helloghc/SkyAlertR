import React from 'react';
import { withTheme } from 'styled-components';
import URLs from 'config/URLs';
import {
  SocialButton,
  LinkApp,
  IconApp,
  Container,
  TopContainer,
  ContainerSections,
  Section,
  ContainerSocialNetworks,
  Contact,
  TextContact,
  ContainerStore,
  ContainerTerms,
} from './styles';
import ReactGA from 'react-ga';
import strings from 'config/strings';
import moment from 'moment';

const YEAR_NOW = moment().year();

class FooterMX extends React.Component {

  analyticsEvents = (page) => {
    ReactGA.event({
      category: 'News',
      action: `Open url`,
      label: `Click ${page}`
    })
  }

  renderSocialNetworks = () => (
    Object.values(URLs.LIST_SOCIAL_NETWORKS).map(({link, img, alt, style}, index)=>(
      <SocialButton href={link} key={index} onClick={()=>this.analyticsEvents(`Social Media ${alt} SkyAlert`)}>
       <i className={style}></i>
      </SocialButton>
    ))
  );
  
  renderAppDownload = ({ NAME = 'LIGHT'}) => (
    Object.values(URLs.LIST_APP_DOWNLOAD).map(({link, img, alt}, index)=>(
      <LinkApp href={link} key={index} onClick={()=>this.analyticsEvents(`Store App ${alt} SkyAlert`)}>
        <IconApp src={img[NAME]} alt={alt}/>
      </LinkApp>
    ))
  );

  renderTermsPrivacy = () => (
    Object.values(URLs.LIST_GENERAL_TERMS_CODITIONS).map(({text, url}, index)=>(
      <Contact href={url} key={index} onClick={()=>this.analyticsEvents(`redirecting - ${text}`)}>
        {text}
      </Contact>
    ))
  );

  render() {
    const { copyright } = strings().FOOTER;
    const { theme } = this.props; 
    return (
      <Container>
          <TopContainer>
            <ContainerSections>
              <Section>
                <ContainerStore>
                  { this.renderAppDownload(theme) }
                </ContainerStore>
                <ContainerSocialNetworks>
                  { this.renderSocialNetworks() }
                </ContainerSocialNetworks>
                <ContainerTerms>
                { this.renderTermsPrivacy()}
                </ContainerTerms>
                <TextContact>{copyright(YEAR_NOW)}</TextContact>
              </Section>
            </ContainerSections>
          </TopContainer>
        </Container>
    );
  }
}

export default withTheme(FooterMX);
