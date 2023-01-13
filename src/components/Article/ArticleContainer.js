import styled, { withTheme } from 'styled-components';

const ArticleContainer = styled.div`
  background: ${({theme}) => (`linear-gradient(${theme.NAME !== 'LIGHT' ? '#212121' : '#FFFFFF'} 0 0) padding-box, 
              linear-gradient(90deg,#fad126,#ff544f) border-box`)};
  border: 3px solid transparent;
  border-radius: var(--main-border-radius);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.17);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: box-shadow 400ms;

  &:hover{
    box-shadow: 0 19px 38px #fad12630, 0 15px 12px #ff544f22;
  }

  &:hover > div > div {
    transform: scale(1.2);
    ${({theme}) => (`${theme.NAME !== 'LIGHT' ? 'filter: grayscale(1)' : 'filter: brightness(1.25)'}`)};
    ;
  } 


`;
export default withTheme(ArticleContainer);
