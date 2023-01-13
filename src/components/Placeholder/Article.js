import React from 'react';
import styled, { withTheme } from 'styled-components';
import ContentLoader from 'react-content-loader';

const Container = styled.div`
    padding: 10px;
`;

const texts = {
    x: 12,
    y: 260,
    rxy: 4,
    large: 360,
    height: 6,
    space: 12,
};

const texts2 = {
    x: 12,
    y: 530,
    rxy: 4,
    large: 360,
    height: 6,
    space: 12,
};

//TODO: REFACTOR CODE
const Article = () => (
    <Container>
        <ContentLoader 
            height={625} 
            width={400} 
            speed={1}
            primaryColor="#A7A7A785"
            secondaryColor="#BDBDBD55"
            >
            <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
            <rect x='10' y="210" rx="5" ry="5" width="321" height="15" />
            <rect x='10' y="232" rx="5" ry="5" width="80" height="10" />
            <rect x="12" y="260" rx="4" ry="4" width="80" height="6" />
            {
                [...Array(4)].map((value, index)=>(
                    <rect key={index} x={texts.x} y={texts.y + (texts.space * index + 1)} rx={texts.rxy} ry={texts.rxy} width={texts.large} height={texts.height} />
                ))
            }
            <rect x="80" y="320" rx="5" ry="5" width="250" height="200" />
            {
                [...Array(8)].map((value, index)=>(
                    <rect key={index} x={texts2.x} y={texts2.y + (texts2.space * index + 1)} rx={texts2.rxy} ry={texts2.rxy} width={texts2.large} height={texts2.height} />
                ))
            }
        </ContentLoader>
    </Container>
);

export default withTheme(Article);