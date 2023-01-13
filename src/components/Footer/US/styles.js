import styled from 'styled-components';
import { device } from 'utils/media';

export const StyledNavLink = styled.a`
  text-decoration: none;
  border: none;
  color: ${( { theme:{ solid } } ) => (solid.white)};
`;

export const Container = styled.footer`
  background: ${( { theme:{ footer } } ) => (footer.background)};
  transition: background 400ms;
`;

export const TopContainer = styled.div`
  margin: 0.5px;
`;

export const ContainerSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 20px 0;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const Section = styled.div`
  flex:1;
  margin: 0 5px;
  text-align: center;
  align-self:center;

  &:first-child, :last-child{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
  }

`;

export const Description = styled.p`
    font-size: 12px;
    font-family: var(--main-font-regular);
    color: ${( { theme:{ footer } } ) => (footer.text)};
    text-align: justify;
    width: 62%;
    letter-spacing: 0.5px;
    display: none;

    @media ${device.laptopS} {
      display: block;
    }
`;

export const Slogan = styled.p`
  font-size: 16px;
  color: ${( { theme:{ footer } } ) => (footer.text)};

  @media ${device.laptopS} {
    font-size: 12px;
  }
`;

export const HomeBrandLink = styled.a`
  text-decoration: none;
  outline: none;
  border: none;
  transform: scale(1);
  transform-origin: center;
  transition: transform 300ms;

  &:hover, &:active{
    transform: scale(1.033);
  }
`;

export const TextTitle = styled.h4`
  color: ${({theme}) => theme.footer.title};
  margin: 10px 0;
  font-size: 14px;
`;

export const Contact = styled.p`
  color: ${({theme}) => theme.footer.text};
  margin: 5px 0;
  font-size: 12px;
`;

export const ButtonEpicenter = styled.a`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  border: 0; 
  color: ${({theme}) => theme.footer.white};
  background: ${({theme}) => theme.footer.button};;
  font-size: 14px;
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

  @media ${device.laptopS} {
    margin: 10px 0 0;
    width: 90%;
  }
`;

export const ContainerSocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
`;

export const SocialButton = styled.a.attrs({
  href: '',
  rel:'noopener noreferrer',
  target: '_blank',
})`
  outline: none;
  text-decoration: none;
  border: 0; 
  border-radius: 50%;
  display: inline-block;
  height: 40px;
  width: 40px;
  margin: 8px;
  background: ${({theme}) => theme.footer.social};
  transition: background 400ms, box-shadow 400ms;

  & > img{
    padding: 10px;
    width: 40px;
    object-fit: contain;
    transform: scale(1);
    transform-origin: center;
    transition: transform 300ms;

    &:hover{
      transform: scale(1.23);
    }
  }

  &.fb:hover, &.fb:active, &.tw:hover, &.tw:active, 
  &.yt:hover, &.yt:active, &.ig:hover, &.ig:active,
  &.le:hover, &.le:active{
    box-shadow: ${( { theme:{ footer:{ shadow } } } ) => (`0 5px 10px ${shadow.first}, 0 3px 3px ${shadow.second}`)};
  } 

  &.fb:hover{
    background: ${( { theme:{ solid:{ social } } } ) => (social.facebook)};
  }

  &.tw:hover{
    background: ${( { theme:{ solid:{ social } } } ) => (social.twitter)};
  }

  &.yt:hover{
    background:${( { theme:{ solid:{ social } } } ) => (social.youtube)};
  }

  &.ig:hover{
    background: ${( { theme:{ solid:{ social: {instagram}} } } ) => (`radial-gradient(circle at 30% 107%, ${instagram.color1} 0%, ${instagram.color2} 5%, ${instagram.color3} 45%, ${instagram.color4} 60%, ${instagram.color5} 90%)`)};
  }

  &.le:hover{
    background: ${( { theme:{ solid:{ social } } } ) => (social.linkedin)};
  }
`; 

// const Newsletter = styled.div`
//   display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: center;

//   @media ${device.laptopS} {
//     justify-content: flex-start;
//   }
// `;

// const MailInput = styled.input.attrs({
//   type:'email',
//   placeholder: 'Ingresa tu correo',
// })`
//   font-family: var(--main-font-medium);
//   font-size: 14px;
//   background: ${( { theme:{ footer } } ) => (footer.inputText)};
//   color: ${( { theme:{ footer } } ) => (footer.white)};
//   border: 0;
//   outline: 0;
//   padding: 14px 8px;
//   margin: 0;
//   width: 200px;
//   border-radius: 3px;
//   transition: background 400ms, color 400ms;
// `;

// const SubmitButton = styled.button`
//   display: inline-block;
//   font-family: var(--main-font-bold);
//   font-size: 13px;
//   box-shadow: 0 0 0 0 transparent;
//   background: ${( { theme:{ footer } } ) => (footer.button)};
//   color: ${( { theme:{ footer } } ) => (footer.white)};
//   border: 0;
//   outline: 0;
//   padding: 0;
//   cursor: pointer;
//   height: 47px;
//   margin-left: -2px;
//   padding: 12px 20px;
//   border-radius: 0 3px 3px 0;
//   transition: background 400ms, color 400ms;
    
//   &:hover, &:active{
//     background: ${( { theme:{ footer } } ) => (footer.buttonHover)};
//     box-shadow: ${( { theme:{ footer:{ shadow } } } ) => (`0 5px 10px ${shadow.first}, 0 3px 3px ${shadow.second}`)};
//   }
// `;

export const AppButton = styled.a.attrs({
  href: '',
  rel:'noopener noreferrer',
  target: '_blank',
})`
  outline: none;
  text-decoration: none;
  border: 0; 
  border-radius: 3px;
  background: ${( { theme:{ footer } } ) => (footer.app)};
  box-shadow: 0 0 0 0 transparent;
  font-size: 16px;
  width: 270px;
  color: ${( { theme:{ footer } } ) => (footer.appText)};
  padding: 10px;
  transform: scale(1);
  transform-origin: center;
  transition: color 400ms, background 400ms, transform 400ms, box-shadow 400ms;
  margin: 15px 0;

  &:hover{
    transform: scale(1.033);
    box-shadow: ${({ theme:{ footer:{ shadow } } } ) => (`0 5px 10px ${shadow.first}, 0 3px 3px ${shadow.second}`)};
  }

  @media ${device.laptopS} {
    width: 60%;
    margin: 0;
  }
`;

export const SubsButton = styled(AppButton)`
  background: #CC1000 !important;
  text-align:center;
`;

export const IconApp = styled.img.attrs({
  src: '',
  alt: '',
  width: '30',
})`
  margin-right: 10px;
  vertical-align: middle;
  margin-left: 5px;
`;

export const TextBottom = styled.span`
  color: ${({theme}) => theme.footer.text};
  transition: color 400ms;
  font-size: 12px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({theme}) => theme.footer.line};
  transition: background 400ms;
  padding: 10px 15px;

    & ${StyledNavLink}{
      flex: 0.04;
      padding: 0 5px;
    }

    @media ${device.mobileS} {
      flex-direction:column;
    }

    @media ${device.laptopS} {
      flex-direction:row;
    }

  & ${TextBottom} {
    flex: 0.92;
    text-align: center;
    margin: 8px;

    @media ${device.laptopS} {
      flex-direction:row;
      text-align: right;
      margin: 0;
    }
  }
`;