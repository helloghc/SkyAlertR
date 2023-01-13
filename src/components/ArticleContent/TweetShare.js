/* Libraries */
import React from 'react';
import styled from 'styled-components';
import {device} from 'utils/media';

const Button = styled.a`
  background-color: #1b94e0;
  border: none;
  width: 30px;
  height: 30px;
  text-decoration: none;
  display: block;
  i{
    font-size: 20px;
    margin: 0 !important;
    padding: 6px;
    color:White;
  }
  @media ${device.laptop} {
    width: 35px;
    height: 35px;
    i{
      padding: 8px 9px;
    }
  }
`;

const TweetShare = ({url, text, onPress}) =>
    <Button href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} onClick={onPress}>
      <i className="fa fa-twitter" aria-hidden="true"></i>
    </Button>

export default TweetShare;
