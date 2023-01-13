import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
    from{
        opacity: 0;
        transform: translateY(15px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const ArticleWrapper = styled.div`
  animation: ${slideUp} 800ms ease-out backwards;

  h1 {
    word-break: break-word;
  }

  p {
    letter-spacing: -0.003em;
    line-height: 32px;
    margin-top: 1em;
    word-break: break-word;
  }

  h2 {
    margin: 1em 0;
  }
`;

export default {
    slideUp,
    ArticleWrapper
}