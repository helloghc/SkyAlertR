/* Libraries */
import React from 'react';
import styled from 'styled-components';
import SkyAlertAPI from  '../../controllers/SkyAlertAPI';

const Container = styled.div`
  /*Positioning*/
  position: relative;
  /* Display & Box Model */
  margin-bottom: 2rem;
`;

const Picture = styled.div`
  /* Display & Box Model */
  display: inline-block;
  height: calc(23rem/4);
  margin: 0 auto;
  overflow: hidden;
  vertical-align: middle;
  width: calc(32.5rem/4);
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
  display: inline-block;
  vertical-align: middle;
  margin-left: 0;
`;

const Name = styled.h1`
  /*Style*/
  color: rgb(74,74,74);
  /* Text */
  font-family: var(--main-font-bold);
  font-size: 1.7rem;
  text-transform: capitalize;
`;

const Author = (props) =>
<Container>
  <Picture>
    <HexRotate>
      <HexRotate>
          <HexImage imageSrc={SkyAlertAPI.getPicURL(props.image, 'author')}/>
      </HexRotate>
    </HexRotate>
  </Picture>
  <Information>
    <Name>{props.name}</Name>
    {/* <Slug>{`@${props.slug}`}</Slug> */}
  </Information>
</Container>


export default Author;
