/* Libraries */
import React from 'react';
import styled from 'styled-components';
/* Utils */
import {device} from 'utils/media';

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.laptop} {
		height: calc(100vh - 250px);
	}
`;

const LoaderComponent = styled.div`
  border: 5px solid #f3f3f3;
  border-top:5px solid rgba(70, 70, 70, 1); /*Changed gray color last color =  rgba(70, 70, 70, 1) */
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
`;

const Loader = (props) =>
  <LoaderContainer>
    <LoaderComponent/>
  </LoaderContainer>
export default Loader;
