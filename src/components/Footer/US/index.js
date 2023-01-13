import React from 'react';
import { withTheme } from 'styled-components';
import URLs from 'config/URLs';
import Brand from 'components/Brand';
import {
  SocialButton,
  SubsButton,
  StyledNavLink,
  TextBottom,
  Container,
  TopContainer,
  ContainerSections,
  HomeBrandLink,
  Slogan,
  Description,
  Section,
  TextTitle,
  Contact,
  ContainerSocialNetworks,
  BottomContainer,
} from './styles';
import strings from 'config/strings';
import moment from 'moment';

const YEAR_NOW = moment().year();

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;

class FooterUS extends React.Component {

  renderSocialNetworks = () => (
    Object.values(URLs.LIST_SOCIAL_NETWORKS).map(({link, img, alt, style}, index)=>(
      <SocialButton href={link} className={style} key={index}>
        <img src={img} align='middle' alt={alt}/>
      </SocialButton>
    ))
  );
  
  renderSubscribe = (text) => {
    //TODO: TEMP SECTION FOR APP USA
    const link = 'https://lp.skyalertusa.com/skyalert-app-comingsoon';
    return (
      <SubsButton href={link}>
        {text}
      </SubsButton>
    );
  };

  renderTermsPrivacy = () => (
    Object.values(URLs.LIST_GENERAL_TERMS_CODITIONS).map(({text, url}, index)=>(
      <StyledNavLink href={url} key={index}>
        <TextBottom>{text}</TextBottom>
      </StyledNavLink>
    ))
  );

  render() {
    const { brand, contact, downloadApp, socialNetworks, copyright} = strings().FOOTER;
    return (
      <Container>
          <TopContainer>
            <ContainerSections>
              <Section>
                <HomeBrandLink href={URLs.LINK_HOME}> 
                  <Brand show width='130px' height='80px' />
                </HomeBrandLink>
                <Slogan>{brand.slogan}</Slogan> 
                <Description>{ brand.description }</Description>
              </Section>
              <Section>
                <TextTitle>{contact.title}</TextTitle>
                <Contact>{contact.email}</Contact>
                <Contact>{contact.address}</Contact>
              </Section>
              <Section>
                <TextTitle>{socialNetworks.title}</TextTitle>
                  <ContainerSocialNetworks>
                    { this.renderSocialNetworks() }
                  </ContainerSocialNetworks>
                {/* <TextTitle>Suscríbete</TextTitle>
                <Newsletter>
                  <MailInput /> 
                  <SubmitButton>Envíar</SubmitButton>
                </Newsletter> */}
              </Section>
              <Section>
                <TextTitle>{downloadApp.title}</TextTitle>
                { this.renderSubscribe(downloadApp.subscribe) }
              </Section>
            </ContainerSections>
          </TopContainer>
          <BottomContainer>
            { this.renderTermsPrivacy()}
            <TextBottom>{copyright(YEAR_NOW)}</TextBottom>
          </BottomContainer>
        </Container>
    );
  }
}

export default withTheme(FooterUS);
