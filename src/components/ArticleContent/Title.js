/* Libraries */
import styled, { withTheme } from 'styled-components';
/* Utils */
import {device} from 'utils/media';

const Title = styled.h1 `
  /* Style */
  color: ${({theme:{articleContent}}) => (articleContent.title)};
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 2.3rem;
  margin-bottom: 2rem;
  transition: color 400ms;

  @media ${device.mobileCustom} {
    font-size: 2.4rem;
  }
  @media ${device.mobileL} {
    font-size: 2.7rem;
  }
  @media ${device.laptop} {
    font-size: 4.3rem;
  }
`;

export default withTheme(Title);
