import styled from 'styled-components';
import { device } from 'utils/media';

const BG_GRADIENT = ( theme, type) => {
  const percent = type === 'mobile' ? 12 : 65;
  const deg = type === 'mobile' ? 74 : -104;
  return theme === 'LIGHT' 
  ? `#f6f6f6`
  : `#292929`
};


export const StyledNavLink = styled.a`
  text-decoration: none;
  border: none;
  color: ${( { theme:{ footer } } ) => (footer.text)};
`;

export const Container = styled.footer`
  background: ${({ theme }) => (BG_GRADIENT(theme.NAME, 'mobile'))};
  transition: background 400ms;
  
  @media ${device.laptop} {
    background: ${({ theme }) => (BG_GRADIENT(theme.NAME, 'desktop'))};
  }
`;

export const TopContainer = styled.div`
  margin: 0.5px;

  @media ${device.laptop} {
    height: 32rem;
  }
`;

export const ContainerSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 20px 20px;
  height: 100%;
`;

export const Section = styled.div`
  flex:1;
  margin: 0 5px;
  text-align: center;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center; 
`;

export const BrandEpicenter = styled.img`
  width: 70%;
  margin: 20px auto;
  
  @media ${device.tablet} {
    width: 40%;
  }

  @media ${device.laptop} {
    width: 65%;
  }
`;

export const ButtonEpicenter = styled.a`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  border: 0; 
  color: ${({theme}) => theme.footer.white};
  background: ${({theme}) => theme.footer.button};;
  font-size: 17px;
  border-radius: 3px;
  padding: 13px 15px;
  display: block;
  width: 270px;
  text-align: center;
  margin: 10px auto;
  box-shadow: 0 0 0 0 transparent;
  transform-origin: center;
  transform: scale(1);
  transition: transform 400ms, background 400ms;

  &:hover, &:active{
    transform: scale(1.033); 
    background: ${( { theme:{ footer } } ) => (footer.buttonHover)};
    box-shadow:  ${( { theme:{ footer:{ shadow } } } ) => (`0 5px 10px ${shadow.first}, 0 3px 3px ${shadow.second}`)};
  }

  @media ${device.laptop} {
    margin-top: 20px;
  }
`;

export const TextTitle = styled.h4`
  color: ${({theme}) => theme.footer.title};
  margin: 10px 0;
  font-size: 14px;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.footer.title};
  transition: color 400ms;
  font-size: 1.8rem;
  font-weight: bolder;
  margin-bottom: 25px;
`;

export const ContainerSocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  margin: 10px auto;
`;

export const SocialButton = styled.a.attrs({
  href: '',
  rel:'noopener noreferrer',
  target: '_blank',
})`
  outline: none;
  text-decoration: none;
  border: 0; 
    
  i{
    padding: 2rem .5rem;
    color: ${({theme}) => theme.footer.text};
    font-size: 2.5rem;
    transition: color 1s;
    margin: auto 16px;
   }

   i:hover{
    color: #ea6911;
   }
`; 
  
export const Contact = styled.a`
  display: block;
  color: ${({theme}) => theme.footer.text};
  margin: 5px 0;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--main-font-normal);

  @media ${device.laptop} {
    font-size: 1.7rem;
  }

  .fa-whatsapp{
    font-size: 2.05rem !important;
  }

`;

export const TextContact = styled.p`
  color: ${({theme}) => theme.footer.text};
  margin: 5px 0;
  font-size: 1.5rem;
  font-weight: 100;
  
  @media ${device.laptop} {
    font-size: 1.65rem;
  }
`;

export const TextLegend = styled(TextContact)`
  font-weight: 500;
  font-family: var(--main-font-thin);
  font-size: 1.8rem;
  margin-top: -15px;
  letter-spacing: 1.5px;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

export const ContainerTerms = styled.div`
  margin: 2rem 0;
  margin-top: -1em;
`;

export const LinkApp = styled.a.attrs({
  href: '',
  rel:'noopener noreferrer',
  target: '_blank',
})`
  outline: none;
  text-decoration: none;
  border: 0; 
`;

export const IconApp = styled.img.attrs({
  src: '',
  alt: '',
})`
  width: 200px;
  margin: 20px; 
  vertical-align: middle;
  display: flex;
  transform: scale(1);
  transform-origin: center;
  transition: transform 300ms;

  &:hover{
    transform: scale(1.05);
  }

  @media ${device.laptop} {
    width: 175px;
  }
`;

export const ContainerStore = styled.div`
  flex:0.8;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media ${device.laptop} {
    flex-flow: row nowrap;
  }
`;