import React from 'react';
import styled from 'styled-components';

const ContainerAds = styled.div`
    width: 100%;
    padding: 25px;
    background: #F5F5F5;
    margin: 0 auto 25px auto;
`;

const Title = styled.h1`
    font-size: 36px;
    color: gray;
    text-align: center;
    font-family: var(--main-font-bold);
`;

const Advertising = () => (
    <ContainerAds>
        <Title>EXAMPLE ADS</Title>
    </ContainerAds>
);

export default Advertising;