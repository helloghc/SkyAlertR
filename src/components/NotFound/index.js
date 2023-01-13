import React from 'react';
import styled, { withTheme } from 'styled-components';
import Figure from './Figure';
import strings from 'config/strings';

const ContainerComponent = styled.div`
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

const Title = styled.h1`
    font-size: 10vh;
    color: ${({theme:{notFound}}) => (notFound.text)};
    transition: color 300ms; 
`;

const Subtitle = styled(Title)`
    font-size: 6vh;
`;

const NotFound = () => (
    <ContainerComponent>
        <Title>{strings().NOTFOUND.title}</Title>
        <Figure />
        <Subtitle>{strings().NOTFOUND.subtitle}</Subtitle>
    </ContainerComponent>
);

export default withTheme(NotFound);