import React from 'react';
import styled, { withTheme } from 'styled-components';
import ContentLoader from 'react-content-loader';

const Container = styled.div`
    background: ${({theme:{placeholder}})=>(placeholder.feed)};
    padding: 10px;
`;

const Feed = ({ height, width }) => (
    <Container>
        <ContentLoader 
            height={height}
            width={width}
            speed={1}
            primaryColor={'#F3F3F322'}
            secondaryColor={'#ECEBEB32'}>
            <rect x='0' y='0' rx='5' ry='5' width={width} height='305' /> 
            <rect x='10' y='315' rx='0' ry='0' width={(width - 20)} height='24' /> 
            <rect x='10' y='345' rx='0' ry='0' width='180' height='24' /> 
            <rect x='10' y='395' rx='0' ry='0' width='380' height='24' /> 
            <rect x='10' y='425' rx='0' ry='0' width='380' height='24' /> 
            <rect x='10' y={(height - 30)} rx='0' ry='0' width='80' height='28' />
        </ContentLoader>
    </Container>
);

export default withTheme(Feed);