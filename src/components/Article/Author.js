/* Libraries */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import strings from 'config/strings';

const Container = styled.div`
  /*Positioning*/
  position: relative;
  /* Display & Box Model */
  padding: .5rem 1rem;
  width: 100%;
  /*Style*/
  background: rgba(0,0,0,0.5);
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  opacity:0.9;
`;

const Information = styled.div`
  /* Display & Box Model */
  display: inline-block;
  vertical-align: middle;
`;

const Name = styled.h1`
  /* Style */
  color: White;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.2rem;
  padding-left:10px;
`;

/*const Twitter = styled.p`
  color:white;
  font-family: var(--main-font-light);
  font-size: 1rem;
  font-style:oblique;
`;*/

const PublishAt = styled.span`
  /*Positioning*/
  position:absolute;
  /*bottom: 1rem;*/
  right: 1rem;
  /* Style */
  color: White;
  /* Text */
  font-family: var(--main-font-light);
  font-size: 1.2rem;
`;
const Author = (props) =>
<Container style={props.background}>
  <NavLink strict to={'/autor/' + props.slug}>
    <Information>
      <Name style={props.color}>Por {props.name}</Name>
    </Information>
    <PublishAt style={props.color}>{strings().TIME.ago(props.time)}</PublishAt>
  </NavLink>
</Container>


export default Author;
